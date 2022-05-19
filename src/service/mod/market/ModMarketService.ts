import {defaults} from "@/puff-smith/service";
import {IModMarketService, IModMarketServiceCreate} from "@/puff-smith/service/mod/market/interface";
import {ModRepository} from "@/puff-smith/service/mod/ModRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModMarketService = (request: IModMarketServiceCreate = defaults()): IModMarketService => {
	const modService = singletonOf(() => ModRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IModMarketService>({
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
