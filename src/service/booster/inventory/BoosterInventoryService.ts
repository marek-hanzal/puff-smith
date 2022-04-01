import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {BoosterService, IBoosterInventoryService} from "@/puff-smith/service/booster";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BoosterInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IBoosterInventoryService => RepositoryService<IBoosterInventoryService>({
	name: 'booster-inventory',
	source: prismaClient.boosterInventory,
	mapper: async boosterTransaction => ({
		...boosterTransaction,
		booster: await BoosterService(prisma).toMap(boosterTransaction.boosterId),
		transaction: await TransactionService(prisma).toMap(boosterTransaction.transactionId),
	}),
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
});
