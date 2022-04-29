import {ServiceCreate} from "@/puff-smith/service";
import {CellService} from "@/puff-smith/service/cell/CellService";
import {ICellMarketService, ICellMarketServiceCreate} from "@/puff-smith/service/cell/market/interface";
import {RepositoryService} from "@leight-core/server";

export const CellMarketService = (request: ICellMarketServiceCreate = ServiceCreate()): ICellMarketService => RepositoryService<ICellMarketService>({
	name: "cell-market",
	source: request.prisma.cell,
	mapper: async entity => ({
		cell: await CellService(request).map(entity),
		isOwned: request.userService.getOptionalUserId() ? (await request.prisma.cellInventory.count({
			where: {
				cellId: entity.id,
				userId: request.userService.getOptionalUserId(),
			}
		})) > 0 : undefined,
	}),
	toFilter: CellService(request).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
