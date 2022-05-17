import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBoosterMarketService, IBoosterMarketServiceCreate} from "@/puff-smith/service/booster/market/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const BoosterMarketService = (request: IBoosterMarketServiceCreate): IBoosterMarketService => {
	const boosterService = singletonOf(() => BoosterService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<IBoosterMarketService>({
		name: "booster-market",
		source: request.prisma.booster,
		mapper: async entity => ({
			booster: await boosterService().map(entity),
			isOwned: userId ? (await request.prisma.boosterInventory.count({
				where: {
					boosterId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => boosterService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
