import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaMarketService, IAromaMarketServiceCreate} from "@/puff-smith/service/aroma/market/interface";
import {RepositoryService} from "@leight-core/server";

export const AromaMarketService = (request: IAromaMarketServiceCreate = ServiceCreate()): IAromaMarketService => RepositoryService<IAromaMarketService>({
	name: "aroma-market",
	source: request.prisma.aroma,
	mapper: async entity => ({
		aroma: await AromaService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.aromaInventory.count({
			where: {
				aromaId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: AromaService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
