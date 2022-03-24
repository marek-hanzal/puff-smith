import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {CottonService, ICottonTransactionService} from "@/puff-smith/service/cotton";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const CottonTransactionService = (prismaClient: IPrismaClientTransaction = prisma): ICottonTransactionService => {
	const service: ICottonTransactionService = {
		...AbstractRepositoryService<ICottonTransactionService>(prismaClient, prismaClient.cottonTransaction, async cottonTransaction => {
			const cottonService = CottonService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(cottonTransaction.transactionId);
			return {
				...cottonTransaction,
				cotton: await cottonService.toMap(cottonTransaction.cottonId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const cottonService = CottonService(prisma);
			const transactionService = TransactionService(prisma);
			const cotton = await cottonService.toMap(create.cottonId);
			const transaction = await transactionService.create({
				amount: -1 * (cotton.cost || 0),
				note: `Purchase of cotton [${cotton.vendor.name} ${cotton.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.cottonTransaction.create({
				data: {
					cottonId: cotton.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
