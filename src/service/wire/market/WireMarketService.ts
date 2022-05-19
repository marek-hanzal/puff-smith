import {defaults} from "@/puff-smith/service";
import {IWireMarketService, IWireMarketServiceCreate} from "@/puff-smith/service/wire/market/interface";
import {WireRepository} from "@/puff-smith/service/wire/WireRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const WireMarketService = (request: IWireMarketServiceCreate = defaults()): IWireMarketService => {
	const wireService = singletonOf(() => WireRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IWireMarketService>({
		name: "wire-market",
		source: request.prisma.wire,
		mapper: async entity => ({
			wire: await wireService().map(entity),
			isOwned: userId ? (await request.prisma.wireInventory.count({
				where: {
					wireId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => wireService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
