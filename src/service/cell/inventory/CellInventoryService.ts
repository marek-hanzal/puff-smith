import {CellService} from "@/puff-smith/service/cell/CellService";
import {ICellInventoryService} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const CellInventoryService = (prismaClient: IPrismaClientTransaction = prisma): ICellInventoryService => RepositoryService<ICellInventoryService>({
	name: "cell-inventory",
	source: prismaClient.cellInventory,
	mapper: async cellTransaction => ({
		...cellTransaction,
		cell: await CellService(prismaClient).toMap(cellTransaction.cellId),
		transaction: await TransactionService(prismaClient).toMap(cellTransaction.transactionId),
	}),
	create: async ({code, ...create}) => prisma.$transaction(async prismaClient => {
		const cell = await CellService(prismaClient).toMap(create.cellId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: cell.cost,
			note: `Purchase of cell [${cell.vendor.name} ${cell.name}]`,
			callback: async transaction => prismaClient.cellInventory.create({
				data: {
					code: code || CodeService().code(),
					cellId: cell.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
