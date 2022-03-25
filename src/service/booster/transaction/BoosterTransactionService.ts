import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {BoosterService, IBoosterTransactionService} from "@/puff-smith/service/booster";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BoosterTransactionService = (prismaClient: IPrismaClientTransaction = prisma): IBoosterTransactionService => {
	const service: IBoosterTransactionService = {
		...AbstractRepositoryService<IBoosterTransactionService>(prismaClient, prismaClient.boosterTransaction, async boosterTransaction => {
			const boosterService = BoosterService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(boosterTransaction.transactionId);
			return {
				...boosterTransaction,
				booster: await boosterService.toMap(boosterTransaction.boosterId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const boosterService = BoosterService(prisma);
			const transactionService = TransactionService(prisma);
			const booster = await boosterService.toMap(create.boosterId);
			const transaction = await transactionService.create({
				amount: -1 * (booster.cost || 0),
				note: `Purchase of booster [${booster.vendor.name} ${booster.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.boosterTransaction.create({
				data: {
					boosterId: booster.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
