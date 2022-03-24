import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {AtomizerService, IAtomizerTransactionService} from "@/puff-smith/service/atomizer";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const AtomizerTransactionService = (prismaClient: IPrismaClientTransaction = prisma): IAtomizerTransactionService => {
	const service: IAtomizerTransactionService = {
		...AbstractRepositoryService<IAtomizerTransactionService>(prismaClient, prismaClient.atomizerTransaction, async atomizerTransaction => {
			const atomizerService = AtomizerService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(atomizerTransaction.transactionId);
			return {
				...atomizerTransaction,
				atomizer: await atomizerService.toMap(atomizerTransaction.atomizerId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const atomizerService = AtomizerService(prisma);
			const transactionService = TransactionService(prisma);
			const atomizer = await atomizerService.toMap(create.atomizerId);
			const transaction = await transactionService.create({
				amount: -1 * (atomizer.cost || 0),
				note: `Purchase of atomizer [${atomizer.vendor.name} ${atomizer.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.atomizerTransaction.create({
				data: {
					atomizerId: atomizer.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
