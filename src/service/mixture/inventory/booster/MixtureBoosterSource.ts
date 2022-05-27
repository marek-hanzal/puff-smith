import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IMixtureBoosterSource} from "@/puff-smith/service/mixture/inventory/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureBoosterSource = (): IMixtureBoosterSource => {
	const boosterSource = singletonOf(() => BoosterSource());

	const source: IMixtureBoosterSource = Source<IMixtureBoosterSource>({
		name: "mixture.inventory.booster",
		prisma,
		map: async mixtureInventory => boosterSource().map(mixtureInventory?.booster),
		source: {
			count: async ({filter}) => prisma.mixtureInventory.count({
				distinct: ["boosterId"],
				where: {
					booster: {
						OR: [
							{
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: filter?.fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				},
			}),
			query: async ({filter}) => prisma.mixtureInventory.findMany({
				distinct: ["boosterId"],
				select: {
					booster: {
						include: {
							vendor: true,
						}
					},
				},
				where: {
					NOT: {
						boosterId: null,
					},
					booster: {
						OR: [
							{
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: filter?.fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				},
				orderBy: [
					{booster: {name: "asc"}},
				],
			}),
		}
	});

	return source;
};
