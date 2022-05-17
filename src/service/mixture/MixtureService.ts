import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IMixtureCreate, IMixtureService, IMixtureServiceCreate} from "@/puff-smith/service/mixture/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const MixtureService = (request: IMixtureServiceCreate): IMixtureService => {
	const tagService = singletonOf(() => TagService(request));
	const aromaService = singletonOf(() => AromaService(request));
	const boosterService = singletonOf(() => BoosterService(request));
	const baseService = singletonOf(() => BaseService(request));
	const codeService = singletonOf(() => CodeService());

	const toCreate = async ({draws, ...create}: IMixtureCreate) => {
		const vgToRound = Math.round(create.vg * 0.1) / 0.1;
		const $aroma = await aromaService().fetch(create.aromaId);
		return {
			...create,
			vendorId: $aroma.vendorId,
			hash: `${create.aromaId}-${create.baseId || null}-${create.boosterId || null}-${create.nicotine}`,
			vgToRound,
			pgToRound: 100 - vgToRound,
			nicotineToRound: Math.round(create.nicotine || 0),
			MixtureDraw: {
				createMany: {
					data: draws ? (await tagService().fetchByCodes(draws, "draw")).map(tag => ({
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
				const aroma = await aromaService().toMap(mixture.aromaId);
				return {
					...mixture,
					vgToRound: mixture.vgToRound,
					pgToRound: mixture.pgToRound,
					aroma,
					booster: mixture.boosterId ? await boosterService().toMap(mixture.boosterId) : undefined,
					base: mixture.baseId ? await baseService().toMap(mixture.baseId) : undefined,
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
					})).map(({draw}) => tagService().map(draw))),
				};
			},
			create: async ({code, ...mixture}) => request.prisma.mixture.create({
				data: {
					...await toCreate(mixture),
					code: code || codeService().code(),
				},
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
