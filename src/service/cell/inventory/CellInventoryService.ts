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
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const cell = await CellService(prisma).toMap(create.cellId);
			return TransactionService(prisma).handleTransaction(create.userId, cell.cost, async transaction => prisma.cellInventory.create({
				data: {
					cellId: cell.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}), `Purchase of cell [${cell.vendor.name} ${cell.name}]`);
		}),
	};

	return service;
}
