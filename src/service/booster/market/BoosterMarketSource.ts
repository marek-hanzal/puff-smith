import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterMarketSource, IBoosterMarketSourceCreate} from "@/puff-smith/service/booster/market/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterMarketSource = (request: IBoosterMarketSourceCreate): IBoosterMarketSource => {
	const boosterSource = singletonOf(() => BoosterSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<IBoosterMarketSource>({
		name: "booster-market",
		source: request.prisma.booster,
		mapper: async entity => ({
			booster: await boosterSource().map(entity),
			isOwned: userId ? (await request.prisma.boosterInventory.count({
				where: {
					boosterId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => boosterSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
