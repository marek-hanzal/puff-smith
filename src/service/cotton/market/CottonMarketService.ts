import {ServiceCreate} from "@/puff-smith/service";
import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICottonMarketService, ICottonMarketServiceCreate} from "@/puff-smith/service/cotton/market/interface";
import {RepositoryService} from "@leight-core/server";

export const CottonMarketService = (request: ICottonMarketServiceCreate = ServiceCreate()): ICottonMarketService => RepositoryService<ICottonMarketService>({
	name: "cotton-market",
	source: request.prisma.cotton,
	mapper: async entity => ({
		cotton: await CottonService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.cottonInventory.count({
			where: {
				cottonId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: CottonService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
