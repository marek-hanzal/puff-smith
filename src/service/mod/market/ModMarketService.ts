import {ServiceCreate} from "@/puff-smith/service";
import {IModMarketService, IModMarketServiceCreate} from "@/puff-smith/service/mod/market/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const ModMarketService = (request: IModMarketServiceCreate = ServiceCreate()): IModMarketService => {
	const modService = singletonOf(() => ModService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<IModMarketService>({
		name: "mod-market",
		source: request.prisma.mod,
		mapper: async entity => ({
			mod: await modService().map(entity),
			isOwned: userId ? (await request.prisma.modInventory.count({
				where: {
					modId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => modService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
