import {CellRepository} from "@/puff-smith/service/cell/CellRepository";
import {ICellMarketRepository, ICellMarketRepositoryCreate} from "@/puff-smith/service/cell/market/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellMarketRepository = (request: ICellMarketRepositoryCreate): ICellMarketRepository => {
	const cellRepository = singletonOf(() => CellRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<ICellMarketRepository>({
		name: "cell-market",
		source: request.prisma.cell,
		mapper: async entity => ({
			cell: await cellRepository().map(entity),
			isOwned: userId ? (await request.prisma.cellInventory.count({
				where: {
					cellId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => cellRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
