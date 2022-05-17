import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaMarketService, IAromaMarketServiceCreate} from "@/puff-smith/service/aroma/market/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const AromaMarketService = (request: IAromaMarketServiceCreate): IAromaMarketService => {
	const aromaService = singletonOf(() => AromaService(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return RepositoryService<IAromaMarketService>({
		name: "aroma-market",
		source: request.prisma.aroma,
		mapper: async entity => ({
			aroma: await aromaService().map(entity),
			isOwned: await request.prisma.aromaInventory.count({
				where: {
					aromaId: entity.id,
					userId: userId(),
				}
			}) > 0,
		}),
		toFilter: filter => aromaService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
