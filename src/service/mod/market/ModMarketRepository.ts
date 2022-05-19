import {IModMarketRepository, IModMarketRepositoryCreate} from "@/puff-smith/service/mod/market/interface";
import {ModRepository} from "@/puff-smith/service/mod/ModRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModMarketRepository = (request: IModMarketRepositoryCreate): IModMarketRepository => {
	const modRepository = singletonOf(() => ModRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IModMarketRepository>({
		name: "mod-market",
		source: request.prisma.mod,
		mapper: async entity => ({
			mod: await modRepository().map(entity),
			isOwned: userId ? (await request.prisma.modInventory.count({
				where: {
					modId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => modRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
