import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {IBaseMarketRepository, IBaseMarketRepositoryCreate} from "@/puff-smith/service/base/market/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseMarketRepository = (request: IBaseMarketRepositoryCreate): IBaseMarketRepository => {
	const baseRepository = singletonOf(() => BaseRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IBaseMarketRepository>({
		name: "base-market",
		source: request.prisma.base,
		mapper: async entity => ({
			base: await baseRepository().map(entity),
			isOwned: userId ? (await request.prisma.baseInventory.count({
				where: {
					baseId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => baseRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
