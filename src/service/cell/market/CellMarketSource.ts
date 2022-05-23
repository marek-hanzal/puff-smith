import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellMarketSource, ICellMarketSourceCreate} from "@/puff-smith/service/cell/market/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellMarketSource = (request: ICellMarketSourceCreate): ICellMarketSource => {
	const cellSource = singletonOf(() => CellSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<ICellMarketSource>({
		name: "cell-market",
		source: request.prisma.cell,
		mapper: async entity => ({
			cell: await cellSource().map(entity),
			isOwned: userId ? (await request.prisma.cellInventory.count({
				where: {
					cellId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => cellSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
