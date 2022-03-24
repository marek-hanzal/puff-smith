import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {CellService, ICellTransactionService} from "@/puff-smith/service/cell";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const CellTransactionService = (prismaClient: IPrismaClientTransaction = prisma): ICellTransactionService => {
	const service: ICellTransactionService = {
		...AbstractRepositoryService<ICellTransactionService>(prismaClient, prismaClient.cellTransaction, async cellTransaction => {
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
			const cellService = CellService(prisma);
			const transactionService = TransactionService(prisma);
			const cell = await cellService.toMap(create.cellId);
			const transaction = await transactionService.create({
				amount: -1 * (cell.cost || 0),
				note: `Purchase of [${cell.vendor.name} ${cell.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return await prisma.cellTransaction.create({
				data: {
					cellId: cell.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
