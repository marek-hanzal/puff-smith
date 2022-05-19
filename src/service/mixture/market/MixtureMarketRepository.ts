import {IMixtureMarketRepository, IMixtureMarketRepositoryCreate} from "@/puff-smith/service/mixture/market/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureMarketRepository = (request: IMixtureMarketRepositoryCreate): IMixtureMarketRepository => {
	const mixtureRepository = singletonOf(() => MixtureRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return Repository<IMixtureMarketRepository>({
		name: "mixture-market",
		source: request.prisma.mixture,
		mapper: async entity => ({
			mixture: await mixtureRepository().map(entity),
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
		toFilter: filter => mixtureRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
