import {ServiceCreate} from "@/puff-smith/service";
import {IWireMarketService, IWireMarketServiceCreate} from "@/puff-smith/service/wire/market/interface";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const WireMarketService = (request: IWireMarketServiceCreate = ServiceCreate()): IWireMarketService => {
	const wireService = singletonOf(() => WireService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<IWireMarketService>({
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
