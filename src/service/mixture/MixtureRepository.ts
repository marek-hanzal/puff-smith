import {AromaRepository} from "@/puff-smith/service/aroma/AromaRepository";
import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IMixtureRepository, IMixtureRepositoryCreate} from "@/puff-smith/service/mixture/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const MixtureRepository = (request: IMixtureRepositoryCreate): IMixtureRepository => {
	const tagRepository = singletonOf(() => TagRepository(request));
	const aromaRepository = singletonOf(() => AromaRepository(request));
	const boosterRepository = singletonOf(() => BoosterRepository(request));
	const baseRepository = singletonOf(() => BaseRepository(request));
	const codeService = singletonOf(() => CodeService());

	return Repository<IMixtureRepository>({
		name: "mixture",
		source: request.prisma.mixture,
		mapper: async mixture => {
			const aroma = await aromaRepository().toMap(mixture.aromaId);
			return {
				...mixture,
				vgToRound: mixture.vgToRound,
				pgToRound: mixture.pgToRound,
				aroma,
				booster: mixture.boosterId ? await boosterRepository().toMap(mixture.boosterId) : undefined,
				base: mixture.baseId ? await baseRepository().toMap(mixture.baseId) : undefined,
				volume: aroma.volume || 0,
				draws: await Promise.all((await request.prisma.mixtureDraw.findMany({
					where: {
						mixtureId: mixture.id,
					},
					orderBy: {
						draw: {sort: "asc"},
					},
					include: {
						draw: true,
					}
				})).map(({draw}) => tagRepository().map(draw))),
			};
		},
		create: async ({code, draws, ...mixture}) => {
			const vgToRound = Math.round(mixture.vg * 0.1) / 0.1;
			const $aroma = await aromaRepository().fetch(mixture.aromaId);
			const create = {
				...mixture,
				code: code || codeService().code(),
				vendorId: $aroma.vendorId,
				hash: `${mixture.aromaId}-${mixture.baseId || null}-${mixture.boosterId || null}-${mixture.nicotine}`,
				vgToRound,
				pgToRound: 100 - vgToRound,
				nicotineToRound: Math.round(mixture.nicotine || 0),
				MixtureDraw: {
					createMany: {
						data: draws ? (await tagRepository().fetchByCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			};
			try {
				return await request.prisma.mixture.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => {
					const $mixture = await request.prisma.mixture.findUnique({
						where: {
							hash: create.hash,
						},
						rejectOnNotFound: true,
					});
					await request.prisma.mixtureDraw.deleteMany({
						where: {
							mixtureId: $mixture.id,
						}
					});
					return request.prisma.mixture.update({
						where: {
							id: $mixture.id,
						},
						data: create,
					});
				});
			}
		},
		toFilter: ({fulltext, ...filter} = {}) => deepmerge(filter, {
			OR: [
				{
					aroma: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
				},
				{
					booster: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
				},
				{
					base: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
				},
			],
		}),
	});
};
