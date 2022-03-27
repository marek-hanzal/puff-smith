import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IModTransactionService, ModService} from "@/puff-smith/service/mod";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const ModInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IModTransactionService => {
	const service: IModTransactionService = {
		...AbstractRepositoryService<IModTransactionService>(prismaClient, prismaClient.modInventory, async modTransaction => {
			const modService = ModService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(modTransaction.transactionId);
			return {
				...modTransaction,
				mod: await modService.toMap(modTransaction.modId),
				transaction,
			}
		}),
		handleCreate: async ({request}) => service.map(await service.create(request)),
		create: async create => prisma.$transaction(async prisma => {
			const mod = await ModService(prisma).toMap(create.modId);
			return TransactionService(prisma).handleTransaction({
				userId: create.userId,
				cost: mod.cost,
				note: `Purchase of mod [${mod.vendor.name} ${mod.name}]`,
				callback: async transaction => prisma.modInventory.create({
					data: {
						modId: mod.id,
						transactionId: transaction.id,
						userId: create.userId,
					}
				}),
			});
		}),
	};

	return service;
}
