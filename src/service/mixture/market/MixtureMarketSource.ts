import {IMixtureMarketSource, IMixtureMarketSourceCreate} from "@/puff-smith/service/mixture/market/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureMarketSource = (request: IMixtureMarketSourceCreate): IMixtureMarketSource => {
	const mixtureSource = singletonOf(() => MixtureRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return Source<IMixtureMarketSource>({
		name: "mixture-market",
		source: request.prisma.mixture,
		mapper: async entity => ({
			mixture: await mixtureSource().map(entity),
			booster: {
				isOwned: entity.boosterId ? (await request.prisma.boosterInventory.count({
					where: {
						boosterId: entity.boosterId,
						userId: userId(),
					}
				})) > 0 : undefined,
			},
			base: {
				isOwned: entity.baseId ? (await request.prisma.baseInventory.count({
					where: {
						baseId: entity.baseId,
						userId: userId(),
					}
				})) > 0 : undefined,
			},
		}),
		toFilter: filter => mixtureSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
