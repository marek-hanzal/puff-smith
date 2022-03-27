import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {CellService, ICellInventoryService} from "@/puff-smith/service/cell";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const CellInventoryService = (prismaClient: IPrismaClientTransaction = prisma): ICellInventoryService => {
	const service: ICellInventoryService = {
		...AbstractRepositoryService<ICellInventoryService>(prismaClient, prismaClient.cellInventory, async cellTransaction => {
			const cellService = CellService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(cellTransaction.transactionId);
			return {
				...cellTransaction,
				cell: await cellService.toMap(cellTransaction.cellId),
				transaction,
			}
		}),
		handleCreate: async ({request}) => service.map(await service.create(request)),
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
	};

	return service;
}
