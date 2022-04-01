import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {CellService, ICellInventoryService} from "@/puff-smith/service/cell";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const CellInventoryService = (prismaClient: IPrismaClientTransaction = prisma): ICellInventoryService => RepositoryService<ICellInventoryService>({
	name: 'cell-inventory',
	source: prismaClient.cellInventory,
	mapper: async cellTransaction => ({
		...cellTransaction,
		cell: await CellService(prisma).toMap(cellTransaction.cellId),
		transaction: await TransactionService(prisma).toMap(cellTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const cell = await CellService(prismaClient).toMap(create.cellId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: cell.cost,
			note: `Purchase of cell [${cell.vendor.name} ${cell.name}]`,
			callback: async transaction => prismaClient.cellInventory.create({
				data: {
					cellId: cell.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
