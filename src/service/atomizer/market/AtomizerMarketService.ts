import {ServiceCreate} from "@/puff-smith/service";
import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizerMarketService, IAtomizerMarketServiceCreate} from "@/puff-smith/service/atomizer/market/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const AtomizerMarketService = (request: IAtomizerMarketServiceCreate = ServiceCreate()): IAtomizerMarketService => {
	const atomizerService = singletonOf(() => AtomizerService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<IAtomizerMarketService>({
		name: "atomizer-market",
		source: request.prisma.atomizer,
		mapper: async entity => ({
			atomizer: await atomizerService().map(entity),
			isOwned: userId ? (await request.prisma.atomizerInventory.count({
				where: {
					atomizerId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => atomizerService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
