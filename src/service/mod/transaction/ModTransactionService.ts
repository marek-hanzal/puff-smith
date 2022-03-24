import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IModTransactionService, ModService} from "@/puff-smith/service/mod";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const ModTransactionService = (prismaClient: IPrismaClientTransaction = prisma): IModTransactionService => {
	const service: IModTransactionService = {
		...AbstractRepositoryService<IModTransactionService>(prismaClient, prismaClient.modTransaction, async modTransaction => {
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
			const modService = ModService(prisma);
			const transactionService = TransactionService(prisma);
			const mod = await modService.toMap(create.modId);
			const transaction = await transactionService.create({
				amount: -1 * (mod.cost || 0),
				note: `Purchase of mod [${mod.vendor.name} ${mod.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.modTransaction.create({
				data: {
					modId: mod.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
