import {ServiceCreate} from "@/puff-smith/service";
import {CellService} from "@/puff-smith/service/cell/CellService";
import {ICellMarketService, ICellMarketServiceCreate} from "@/puff-smith/service/cell/market/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CellMarketService = (request: ICellMarketServiceCreate = ServiceCreate()): ICellMarketService => {
	const cellService = singletonOf(() => CellService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<ICellMarketService>({
		name: "cell-market",
		source: request.prisma.cell,
		mapper: async entity => ({
			cell: await cellService().map(entity),
			isOwned: userId ? (await request.prisma.cellInventory.count({
				where: {
					cellId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => cellService().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
