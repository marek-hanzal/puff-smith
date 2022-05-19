import {IWireMarketRepository, IWireMarketRepositoryCreate} from "@/puff-smith/service/wire/market/interface";
import {WireRepository} from "@/puff-smith/service/wire/WireRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireMarketRepository = (request: IWireMarketRepositoryCreate): IWireMarketRepository => {
	const wireRepository = singletonOf(() => WireRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IWireMarketRepository>({
		name: "wire-market",
		source: request.prisma.wire,
		mapper: async entity => ({
			wire: await wireRepository().map(entity),
			isOwned: userId ? (await request.prisma.wireInventory.count({
				where: {
					wireId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => wireRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
