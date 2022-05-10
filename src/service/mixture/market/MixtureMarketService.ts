import {ServiceCreate} from "@/puff-smith/service";
import {IMixtureMarketService, IMixtureMarketServiceCreate} from "@/puff-smith/service/mixture/market/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import {RepositoryService} from "@leight-core/server";

export const MixtureMarketService = (request: IMixtureMarketServiceCreate = ServiceCreate()): IMixtureMarketService => {
	const userId = request.userService.getOptionalUserId();
	return RepositoryService<IMixtureMarketService>({
		name: "mixture-market",
		source: request.prisma.mixture,
		mapper: async entity => ({
			mixture: await MixtureService(request).map(entity),
			aroma: {
				isOwned: userId ? (await request.prisma.aromaInventory.count({
					where: {
						aromaId: entity.id,
						userId,
					}
				})) > 0 : undefined,
			},
			booster: {
				isOwned: userId ? (await request.prisma.boosterInventory.count({
					where: {
						boosterId: entity.id,
						userId,
					}
				})) > 0 : undefined,
			},
			base: {
				isOwned: userId ? (await request.prisma.baseInventory.count({
					where: {
						baseId: entity.id,
						userId,
					}
				})) > 0 : undefined,
			},
		}),
		toFilter: MixtureService(request).toFilter,
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
