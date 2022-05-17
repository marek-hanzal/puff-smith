import {ServiceCreate} from "@/puff-smith/service";
import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICottonMarketService, ICottonMarketServiceCreate} from "@/puff-smith/service/cotton/market/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CottonMarketService = (request: ICottonMarketServiceCreate = ServiceCreate()): ICottonMarketService => {
	const cottonService = singletonOf(() => CottonService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<ICottonMarketService>({
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
