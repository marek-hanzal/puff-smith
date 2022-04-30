import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IMixtureCreate, IMixtureService, IMixtureServiceCreate, IMixtureWhere} from "@/puff-smith/service/mixture/interface";
import {RepositoryService} from "@leight-core/server";

export const MixtureService = (request: IMixtureServiceCreate = ServiceCreate()): IMixtureService => {
	const toCreate = (create: IMixtureCreate) => {
		const vgToRound = Math.round(create.vg * 0.1) / 0.1;
		return {
			...create,
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
				data: toCreate(mixture),
			}),
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
					_filter = {
						...filter,
						aroma: {
							AromaInventory: {
								some: {
									userId: ownedByUserId,
								}
							}
						},
						base: {
							BaseInventory: {
								some: {
									userId: ownedByUserId,
								}
							}
						},
						booster: {
							BoosterInventory: {
								some: {
									userId: ownedByUserId,
								}
							}
						}
					};
				}
				if (notOwnedByUserId) {
					_filter = {
						...filter,
						aroma: {
							AromaInventory: {
								none: {
									userId: notOwnedByUserId,
								}
							}
						}
					};
				}
				return _filter;
			},
		}),
		toCreate,
	};
};
