import {ServiceCreate} from "@/puff-smith/service";
import {IWireMarketService, IWireMarketServiceCreate} from "@/puff-smith/service/wire/market/interface";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {RepositoryService} from "@leight-core/server";

export const WireMarketService = (request: IWireMarketServiceCreate = ServiceCreate()): IWireMarketService => RepositoryService<IWireMarketService>({
	name: "wire-market",
	source: request.prisma.wire,
	mapper: async entity => ({
		wire: await WireService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.wireInventory.count({
			where: {
				wireId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: WireService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
