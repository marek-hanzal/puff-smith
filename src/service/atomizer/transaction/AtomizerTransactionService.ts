import {AtomizerTransaction} from "@prisma/client";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {transactionCreate, transactionFetch, transactionMapper, transactionSum} from "@/puff-smith/service/transaction";
import {AtomizerService, IAtomizerTransaction, IAtomizerTransactionQuery, IAtomizerTransactionServiceFactory} from "@/puff-smith/service/atomizer";

export const AtomizerTransactionService: IAtomizerTransactionServiceFactory = (prismaClient = prisma) => {
	return {
		...AbstractRepositoryService<AtomizerTransaction, IAtomizerTransaction, IAtomizerTransactionQuery>(prismaClient, prismaClient.atomizerTransaction, async atomizerTransaction => {
			const atomizerService = AtomizerService(prisma);
			const transaction = await transactionFetch(atomizerTransaction.transactionId);
			return {
				...atomizerTransaction,
				atomizer: await atomizerService.toMap(atomizerTransaction.atomizerId),
				transaction: await transactionMapper(transaction),
			}
		}),
		create: async create => prisma.$transaction(async prisma => {
			const atomizerService = AtomizerService(prisma);
			const atomizer = await atomizerService.toMap(create.atomizerId);
			const transaction = await transactionCreate({
				amount: -1 * (atomizer.cost || 0),
				note: `Purchase of [${atomizer.vendor.name} ${atomizer.name}]`,
				userId: create.userId,
			}, prisma);
			(await transactionSum({
				filter: {
					userId: create.userId,
				}
			}, prisma)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return await prisma.atomizerTransaction.create({
				data: {
					atomizerId: atomizer.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	}
}
