import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IMixtureCreate, IMixtureService, IMixtureWhere} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const MixtureService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): IMixtureService => {
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
			source: prismaClient.mixture,
			mapper: async mixture => {
				const aroma = await AromaService(prismaClient).toMap(mixture.aromaId);
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
					booster: mixture.boosterId ? await BoosterService(prismaClient).toMap(mixture.boosterId) : undefined,
					base: mixture.baseId ? await BaseService(prismaClient).toMap(mixture.baseId) : undefined,
					baseMl: mixture.baseMl.toNumber(),
					volume: aroma.volume || 0,
				};
			},
			create: async mixture => prismaClient.mixture.create({
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
				ownedByUserId = ownedByCurrentUser ? userId : ownedByUserId;
				notOwnedByUserId = notOwnedByCurrentUser ? userId : notOwnedByUserId;
				if (ownedByUserId) {
					_filter = {
						...filter,
						aroma: {
							AromaInventory: {
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
