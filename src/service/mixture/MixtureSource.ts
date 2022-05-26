import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureSource = (): IMixtureSource => {
	const tagSource = singletonOf(() => TagSource());
	const aromaSource = singletonOf(() => AromaSource());
	const boosterSource = singletonOf(() => BoosterSource());
	const baseSource = singletonOf(() => BaseSource());
	const codeService = singletonOf(() => CodeService());

	const source: IMixtureSource = Source<IMixtureSource>({
		name: "mixture",
		prisma,
		map: async mixture => mixture ? {
			...mixture,
			vgToRound: mixture.vgToRound,
			pgToRound: mixture.pgToRound,
			aroma: await aromaSource().mapper.map(mixture.aroma),
			booster: await boosterSource().map(mixture.booster),
			base: await baseSource().map(mixture.base),
			volume: mixture.aroma.volume || 0,
			draws: await tagSource().mapper.list(Promise.resolve(mixture.MixtureDraw.map(({draw}) => draw))),
		} : undefined,
		source: {
			create: async ({code, draws, ...mixture}) => {
				const vgToRound = Math.round(mixture.vg * 0.1) / 0.1;
				const $aroma = await aromaSource().get(mixture.aromaId);
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
					return await source.prisma.mixture.create({
						data: create,
						include: {
							MixtureDraw: {
								include: {
									draw: true,
								},
							},
							aroma: {
								include: {
									vendor: true,
									AromaTaste: {
										orderBy: {taste: {sort: "asc"}},
										include: {
											taste: true,
										},
									},
								},
							},
							base: {
								include: {
									vendor: true,
								},
							},
							booster: {
								include: {
									vendor: true,
								},
							},
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $mixture = await source.prisma.mixture.findUnique({
							where: {
								hash: create.hash,
							},
							rejectOnNotFound: true,
						});
						await source.prisma.mixtureDraw.deleteMany({
							where: {
								mixtureId: $mixture.id,
							}
						});
						return source.prisma.mixture.update({
							where: {
								id: $mixture.id,
							},
							data: create,
							include: {
								MixtureDraw: {
									include: {
										draw: true,
									},
								},
								aroma: {
									include: {
										vendor: true,
										AromaTaste: {
											orderBy: {taste: {sort: "asc"}},
											include: {
												taste: true,
											},
										},
									},
								},
								base: {
									include: {
										vendor: true,
									},
								},
								booster: {
									include: {
										vendor: true,
									},
								},
							},
						});
					});
				}
			},
		}
	});

	return source;
};
