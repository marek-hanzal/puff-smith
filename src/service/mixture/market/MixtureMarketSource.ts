import {IMixtureMarketSource} from "@/puff-smith/service/mixture/market/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureMarketSource = (): IMixtureMarketSource => {
	const mixtureSource = singletonOf(() => MixtureSource());

	const source: IMixtureMarketSource = Source<IMixtureMarketSource>({
		name: "mixture.market",
		prisma,
		map: async mixture => {
			return mixture ? ({
				mixture: await mixtureSource().mapper.map(mixture),
				booster: {
					isOwned: (mixture.booster?.BoosterInventory?.length || 0) > 0,
				},
				base: {
					isOwned: (mixture.base?.BaseInventory?.length || 0) > 0,
				},
			}) : undefined;
		},
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixture.count({
				where: filter,
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.mixture.findMany({
				where: filter,
				orderBy,
				...pageOf(query),
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
						}
					},
					base: {
						include: {
							vendor: true,
							BaseInventory: {
								where: {
									userId: source.user.required(),
								}
							}
						}
					},
					booster: {
						include: {
							vendor: true,
							BoosterInventory: {
								where: {
									userId: source.user.required(),
								}
							}
						}
					},
					MixtureDraw: {
						orderBy: {draw: {sort: "asc"}},
						include: {
							draw: true,
						}
					}
				}
			}),
		},
	});

	return source;
};
