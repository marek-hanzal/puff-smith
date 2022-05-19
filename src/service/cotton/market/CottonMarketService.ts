import {defaults} from "@/puff-smith/service";
import {CottonRepository} from "@/puff-smith/service/cotton/CottonRepository";
import {ICottonMarketService, ICottonMarketServiceCreate} from "@/puff-smith/service/cotton/market/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonMarketService = (request: ICottonMarketServiceCreate = defaults()): ICottonMarketService => {
	const cottonService = singletonOf(() => CottonRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<ICottonMarketService>({
		name: "cotton-market",
		source: request.prisma.cotton,
		mapper: async entity => ({
			cotton: await cottonService().map(entity),
			isOwned: userId ? (await request.prisma.cottonInventory.count({
				where: {
					cottonId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => cottonService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
