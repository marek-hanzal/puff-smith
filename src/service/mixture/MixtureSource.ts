import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureSource = (): IMixtureSource => {
	const tagSource = singletonOf(() => TagSource());
	const aromaSource = singletonOf(() => AromaSource());
	const boosterSource = singletonOf(() => BoosterSource());
	const baseSource = singletonOf(() => BaseSource());
	const codeService = singletonOf(() => CodeService());

	const source = Source<IMixtureSource>({
		name: "mixture",
		create: async ({code, draws, ...mixture}) => {
			const vgToRound = Math.round(mixture.vg * 0.1) / 0.1;
			const $aroma = await aromaSource().fetch(mixture.aromaId);
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
						data: draws ? (await tagSource().fetchByCodes(draws, "draw")).map(tag => ({
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
		map: async mixture => {
			return {
				...mixture,
				vgToRound: mixture.vgToRound,
				pgToRound: mixture.pgToRound,
				aroma,
				booster: mixture.boosterId ? await boosterSource().toMap(mixture.boosterId) : undefined,
				base: mixture.baseId ? await baseSource().toMap(mixture.baseId) : undefined,
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
				})).map(({draw}) => tagSource().map(draw))),
			};
		},
	});

	return source;
};
