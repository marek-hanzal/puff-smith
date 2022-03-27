import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {BoosterService, IBoosterInventoryService} from "@/puff-smith/service/booster";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BoosterInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IBoosterInventoryService => {
	const service: IBoosterInventoryService = {
		...AbstractRepositoryService<IBoosterInventoryService>(prismaClient, prismaClient.boosterInventory, async boosterTransaction => {
			const boosterService = BoosterService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(boosterTransaction.transactionId);
			return {
				...boosterTransaction,
				booster: await boosterService.toMap(boosterTransaction.boosterId),
				transaction,
			}
		}),
		handleCreate: async ({request}) => service.map(await service.create(request)),
		create: async create => prisma.$transaction(async prismaClient => {
			const booster = await BoosterService(prismaClient).toMap(create.boosterId);
			return TransactionService(prismaClient).handleTransaction({
				userId: create.userId,
				cost: booster.cost,
				note: `Purchase of booster [${booster.vendor.name} ${booster.name}]`,
				callback: async transaction => prismaClient.boosterInventory.create({
					data: {
						boosterId: booster.id,
						transactionId: transaction.id,
						userId: create.userId,
					}
				}),
			});
		}),
	};

	return service;
}
