import {IBuildLiquidSource} from "@/puff-smith/service/build/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BuildLiquidSource = (buildId: string): IBuildLiquidSource => {
	const liquidSource = singletonOf(() => LiquidSource().ofSource(source));

	const source: IBuildLiquidSource = Source<IBuildLiquidSource>({
		name: "build.liquid",
		prisma,
		map: async liquid => {
			if (!liquid) {
				return null;
			}
			const {BuildLiquidRating, ...$liquid} = liquid;
			return {
				...(await liquidSource().mapper.map($liquid)),
				rating: liquid.BuildLiquidRating?.[0] ? {
					...liquid.BuildLiquidRating[0],
					created: liquid.BuildLiquidRating[0].created.toUTCString(),
				} : undefined,
			};
		},
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.liquid.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.liquid.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					vendor: true,
					transaction: true,
					BuildLiquidRating: {
						where: {
							buildId,
						}
					},
					mixture: {
						include: {
							aroma: {
								include: {
									vendor: true,
									AromaTaste: {
										orderBy: {taste: {sort: "asc"}},
										include: {
											taste: true,
										}
									}
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
							MixtureDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								},
							},
						}
					}
				},
				...pageOf(query),
			}),
		}
	});

	return source;
};
