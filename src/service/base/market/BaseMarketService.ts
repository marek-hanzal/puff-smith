import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBaseMarketService, IBaseMarketServiceCreate} from "@/puff-smith/service/base/market/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const BaseMarketService = (request: IBaseMarketServiceCreate): IBaseMarketService => {
	const baseService = singletonOf(() => BaseService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<IBaseMarketService>({
		name: "base-market",
		source: request.prisma.base,
		mapper: async entity => ({
			base: await baseService().map(entity),
			isOwned: userId ? (await request.prisma.baseInventory.count({
				where: {
					baseId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => baseService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
