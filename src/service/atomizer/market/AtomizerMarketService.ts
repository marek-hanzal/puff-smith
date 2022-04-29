import {ServiceCreate} from "@/puff-smith/service";
import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizerMarketService, IAtomizerMarketServiceCreate} from "@/puff-smith/service/atomizer/market/interface";
import {RepositoryService} from "@leight-core/server";

export const AtomizerMarketService = (request: IAtomizerMarketServiceCreate = ServiceCreate()): IAtomizerMarketService => RepositoryService<IAtomizerMarketService>({
	name: "atomizer-market",
	source: request.prisma.atomizer,
	mapper: async entity => ({
		atomizer: await AtomizerService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.atomizerInventory.count({
			where: {
				atomizerId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: AtomizerService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
