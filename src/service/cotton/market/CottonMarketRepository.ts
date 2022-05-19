import {CottonRepository} from "@/puff-smith/service/cotton/CottonRepository";
import {ICottonMarketRepository, ICottonMarketRepositoryCreate} from "@/puff-smith/service/cotton/market/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonMarketRepository = (request: ICottonMarketRepositoryCreate): ICottonMarketRepository => {
	const cottonRepository = singletonOf(() => CottonRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<ICottonMarketRepository>({
		name: "cotton-market",
		source: request.prisma.cotton,
		mapper: async entity => ({
			cotton: await cottonRepository().map(entity),
			isOwned: userId ? (await request.prisma.cottonInventory.count({
				where: {
					cottonId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => cottonRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
