import {IMixtureMarketService, IMixtureMarketServiceCreate} from "@/puff-smith/service/mixture/market/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const MixtureMarketService = (request: IMixtureMarketServiceCreate): IMixtureMarketService => {
	const mixtureService = singletonOf(() => MixtureService(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return RepositoryService<IMixtureMarketService>({
		name: "mixture-market",
		source: request.prisma.mixture,
		mapper: async entity => ({
			mixture: await mixtureService().map(entity),
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
		toFilter: filter => mixtureService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
