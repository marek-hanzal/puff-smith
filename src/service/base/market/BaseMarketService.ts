import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBaseMarketService, IBaseMarketServiceCreate} from "@/puff-smith/service/base/market/interface";
import {RepositoryService} from "@leight-core/server";

export const BaseMarketService = (request: IBaseMarketServiceCreate = ServiceCreate()): IBaseMarketService => RepositoryService<IBaseMarketService>({
	name: "base-market",
	source: request.prisma.base,
	mapper: async entity => ({
		base: await BaseService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.baseInventory.count({
			where: {
				baseId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: BaseService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
