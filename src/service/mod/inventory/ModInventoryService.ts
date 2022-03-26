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
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const mod = await ModService(prisma).toMap(create.modId);
			return TransactionService(prisma).handleTransaction(create.userId, mod.cost, async transaction => prisma.modInventory.create({
				data: {
					modId: mod.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}), `Purchase of mod [${mod.vendor.name} ${mod.name}]`);
		}),
	};

	return service;
}
