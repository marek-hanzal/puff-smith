import {CellService} from "@/puff-smith/service/cell";
import {ICellMarketService} from "@/puff-smith/service/cell/market";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const CellMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): ICellMarketService => RepositoryService<ICellMarketService>({
	name: "cell-market",
	source: prismaClient.cell,
	mapper: async entity => ({
		cell: await CellService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.cellInventory.count({
			where: {
				cellId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: CellService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
