import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IMixtureBoosterSource} from "@/puff-smith/service/mixture/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const MixtureBoosterSource = (): IMixtureBoosterSource => {
	const boosterSource = singletonOf(() => BoosterSource());

	const source: IMixtureBoosterSource = Source<IMixtureBoosterSource>({
		name: "mixture.booster",
		prisma,
		map: async mixture => boosterSource().map(mixture?.booster),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixture.findMany({
				distinct: ["boosterId"],
				where: deepmerge(filter, {
					NOT: {
						boosterId: null,
					},
					booster: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								}
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								}
							},
						],
					},
				}),
				orderBy: [
					{booster: {name: "asc"}},
				],
				include: {
					base: {
						include: {
							vendor: true,
						}
					},
					booster: {
						include: {
							vendor: true,
						}
					},
					aroma: {
						include: {
							vendor: true,
						}
					},
				},
			}),
		}
	});

	return source;
};
