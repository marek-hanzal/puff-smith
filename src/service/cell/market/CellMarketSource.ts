import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellMarketSource} from "@/puff-smith/service/cell/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellMarketSource = (): ICellMarketSource => {
	const cellSource = singletonOf(() => CellSource());

	const source: ICellMarketSource = Source<ICellMarketSource>({
		name: "cell-market",
		prisma,
		map: async entity => ({
			cell: await cellSource().mapper.map(entity),
			isOwned: source.user.optional() ? (await source.prisma.cellInventory.count({
				where: {
					cellId: entity.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}),
	});

	return source;
};
