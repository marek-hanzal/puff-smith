import {ServiceCreate} from "@/puff-smith/service";
import {IModMarketService, IModMarketServiceCreate} from "@/puff-smith/service/mod/market/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import {RepositoryService} from "@leight-core/server";

export const ModMarketService = (request: IModMarketServiceCreate = ServiceCreate()): IModMarketService => RepositoryService<IModMarketService>({
	name: "mod-market",
	source: request.prisma.mod,
	mapper: async entity => ({
		mod: await ModService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.modInventory.count({
			where: {
				modId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: ModService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
