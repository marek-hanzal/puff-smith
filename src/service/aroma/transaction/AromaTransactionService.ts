import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {AromaService, IAromaTransactionService} from "@/puff-smith/service/aroma";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const AromaTransactionService = (prismaClient: IPrismaClientTransaction = prisma): IAromaTransactionService => {
	const service: IAromaTransactionService = {
		...AbstractRepositoryService<IAromaTransactionService>(prismaClient, prismaClient.aromaTransaction, async aromaTransaction => {
			const aromaService = AromaService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(aromaTransaction.transactionId);
			return {
				...aromaTransaction,
				aroma: await aromaService.toMap(aromaTransaction.aromaId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const aromaService = AromaService(prisma);
			const transactionService = TransactionService(prisma);
			const aroma = await aromaService.toMap(create.aromaId);
			const transaction = await transactionService.create({
				amount: -1 * (aroma.cost || 0),
				note: `Purchase of aroma [${aroma.vendor.name} ${aroma.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.aromaTransaction.create({
				data: {
					aromaId: aroma.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
