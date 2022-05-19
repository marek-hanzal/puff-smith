import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {IBoosterMarketRepository, IBoosterMarketRepositoryCreate} from "@/puff-smith/service/booster/market/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterMarketRepository = (request: IBoosterMarketRepositoryCreate): IBoosterMarketRepository => {
	const boosterRepository = singletonOf(() => BoosterRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IBoosterMarketRepository>({
		name: "booster-market",
		source: request.prisma.booster,
		mapper: async entity => ({
			booster: await boosterRepository().map(entity),
			isOwned: userId ? (await request.prisma.boosterInventory.count({
				where: {
					boosterId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => boosterRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
