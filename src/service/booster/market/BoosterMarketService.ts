import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBoosterMarketService, IBoosterMarketServiceCreate} from "@/puff-smith/service/booster/market/interface";
import {RepositoryService} from "@leight-core/server";

export const BoosterMarketService = (request: IBoosterMarketServiceCreate = ServiceCreate()): IBoosterMarketService => RepositoryService<IBoosterMarketService>({
	name: "booster-market",
	source: request.prisma.booster,
	mapper: async entity => ({
		booster: await BoosterService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.boosterInventory.count({
			where: {
				boosterId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: BoosterService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
