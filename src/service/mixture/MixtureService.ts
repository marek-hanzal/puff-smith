import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IMixtureCreate, IMixtureService, IMixtureServiceCreate} from "@/puff-smith/service/mixture/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const MixtureService = (request: IMixtureServiceCreate = ServiceCreate()): IMixtureService => {
	const tagService = TagService(request);
	const aromaService = AromaService(request);
	const boosterService = BoosterService(request);
	const baseService = BaseService(request);

	const toCreate = async ({draws, ...create}: IMixtureCreate) => {
		const vgToRound = Math.round(create.vg * 0.1) / 0.1;
		const $aroma = await aromaService.fetch(create.aromaId);
		return {
			...create,
			vendorId: $aroma.vendorId,
			// hash: sha256(`${create.aromaId}-${create.baseId || null}-${create.boosterId || null}-${create.nicotine}`),
			hash: `${create.aromaId}-${create.baseId || null}-${create.boosterId || null}-${create.nicotine}`,
			vgToRound,
			pgToRound: 100 - vgToRound,
			nicotineToRound: Math.round(create.nicotine || 0),
			MixtureDraw: {
				createMany: {
					data: draws ? (await tagService.fetchByCodes(draws, "draw")).map(tag => ({
						drawId: tag.id,
					})) : [],
				}
			},
		};
	};
	return {
		...RepositoryService<IMixtureService>({
			name: "mixture",
			source: request.prisma.mixture,
			mapper: async mixture => {
				const aroma = await aromaService.toMap(mixture.aromaId);
				return {
					...mixture,
					vgToRound: mixture.vgToRound,
					pgToRound: mixture.pgToRound,
					aroma,
					booster: mixture.boosterId ? await boosterService.toMap(mixture.boosterId) : undefined,
					base: mixture.baseId ? await baseService.toMap(mixture.baseId) : undefined,
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
					})).map(({draw}) => tagService.map(draw))),
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
				await request.prisma.mixtureDraw.deleteMany({
					where: {
						mixtureId: $mixture.id,
					}
				});
				return request.prisma.mixture.update({
					where: {
						id: $mixture.id,
					},
					data: $create,
				});
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
		}),
		toCreate,
	};
};
