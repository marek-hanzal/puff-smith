import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IMixtureCreate, IMixtureService, IMixtureServiceCreate, IMixtureWhere} from "@/puff-smith/service/mixture/interface";
import {sha256} from "@/puff-smith/service/utils/sha256";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const MixtureService = (request: IMixtureServiceCreate = ServiceCreate()): IMixtureService => {
	const toCreate = async (create: IMixtureCreate) => {
		const vgToRound = Math.round(create.vg * 0.1) / 0.1;
		const $aroma = await AromaService(request).fetch(create.aromaId);
		return {
			...create,
			vendorId: $aroma.vendorId,
			hash: sha256(`${create.aromaId}-${create.baseId || null}-${create.boosterId || null}-${create.nicotine}`),
			vgToRound,
			pgToRound: 100 - vgToRound,
			nicotineToRound: Math.round(create.nicotine || 0),
		};
	};
	return {
		...RepositoryService<IMixtureService>({
			name: "mixture",
			source: request.prisma.mixture,
			mapper: async mixture => {
				const aroma = await AromaService(request).toMap(mixture.aromaId);
				return {
					...mixture,
					content: mixture.content.toNumber(),
					diff: mixture.diff.toNumber(),
					nicotine: mixture.nicotine.toNumber(),
					vg: mixture.vg.toNumber(),
					pg: mixture.pg.toNumber(),
					vgToRound: mixture.vgToRound,
					pgToRound: mixture.pgToRound,
					vgToMl: mixture.vgToMl.toNumber(),
					pgToMl: mixture.pgToMl.toNumber(),
					aroma,
					booster: mixture.boosterId ? await BoosterService(request).toMap(mixture.boosterId) : undefined,
					base: mixture.baseId ? await BaseService(request).toMap(mixture.baseId) : undefined,
					baseMl: mixture.baseMl.toNumber(),
					volume: aroma.volume || 0,
				};
			},
			create: async mixture => request.prisma.mixture.create({
				data: await toCreate(mixture),
			}),
			onUnique: async mixture => {
				const $create = await toCreate(mixture);
				const $mixture = await request.prisma.mixture.findUnique({
					where: {
						hash: $create.hash,
					},
					rejectOnNotFound: true,
				});
				return request.prisma.mixture.update({
					where: {
						id: $mixture.id,
					},
					data: $create,
				});
			},
			toFilter: ({fulltext, ownedByUserId, notOwnedByUserId, ownedByCurrentUser, notOwnedByCurrentUser, ...filter} = {}) => {
				let _filter: IMixtureWhere = fulltext ? {
					...filter,
					OR: [
						{
							aroma: {
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							}
						},
					],
				} : filter;
				ownedByUserId = ownedByCurrentUser ? request.userService.getUserId() : ownedByUserId;
				notOwnedByUserId = notOwnedByCurrentUser ? request.userService.getUserId() : notOwnedByUserId;
				if (ownedByUserId) {
					_filter = deepmerge(filter, {
						aroma: {
							AromaInventory: {
								some: {
									userId: ownedByUserId,
								},
							},
						},
						AND: [
							{
								OR: [
									{
										base: {
											BaseInventory: {
												some: {
													userId: ownedByUserId,
												},
											}
										}
									},
									{
										base: null,
									},
								],
							},
							{
								OR: [
									{
										booster: {
											BoosterInventory: {
												some: {
													userId: ownedByUserId,
												},
											}
										},
									},
									{
										booster: null,
									}
								],
							},
						],
					});
				}
				if (notOwnedByUserId) {
					_filter = deepmerge(filter, {
						aroma: {
							AromaInventory: {
								none: {
									userId: notOwnedByUserId,
								}
							}
						}
					});
				}
				return _filter;
			},
		}),
		toCreate,
	};
};
