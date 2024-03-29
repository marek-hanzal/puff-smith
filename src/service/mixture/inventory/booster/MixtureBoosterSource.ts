import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {MixtureBoosterCache} from "@/puff-smith/service/mixture/inventory/booster/cache";
import {IMixtureBoosterSource} from "@/puff-smith/service/mixture/inventory/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureBoosterSource = (): IMixtureBoosterSource => {
	const boosterSource = singletonOf(() => BoosterSource().ofSource(source));

	const source: IMixtureBoosterSource = Source<IMixtureBoosterSource>({
		name: "mixture.inventory.booster",
		prisma,
		map: async mixture => boosterSource().map(mixture.booster!),
		cache: MixtureBoosterCache,
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					distinct: ["boosterId"],
					select: {
						booster: {
							include: {
								vendor: true,
							}
						},
					},
					where: merge(filter, {
						NOT: {
							boosterId: null,
						},
						booster: {
							OR: [
								{
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
								{
									vendor: {
										name: {
											contains: fulltext,
											mode: "insensitive",
										},
									},
								}
							],
						},
						MixtureInventory: {
							some: {
								userId,
							},
						},
					}),
					orderBy: [
						{booster: {name: "asc"}},
					],
				});
			},
		}
	});

	return source;
};
