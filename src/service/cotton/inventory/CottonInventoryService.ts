import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {CottonService, ICottonInventoryService} from "@/puff-smith/service/cotton";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const CottonInventoryService = (prismaClient: IPrismaClientTransaction = prisma): ICottonInventoryService => RepositoryService<ICottonInventoryService>({
	name: 'cotton-inventory',
	source: prismaClient.cottonInventory,
	mapper: async cottonTransaction => ({
		...cottonTransaction,
		cotton: await CottonService(prismaClient).toMap(cottonTransaction.cottonId),
		transaction: await TransactionService(prismaClient).toMap(cottonTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const cotton = await CottonService(prismaClient).toMap(create.cottonId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: cotton.cost,
			note: `Purchase of cotton [${cotton.vendor.name} ${cotton.name}]`,
			callback: async transaction => prismaClient.cottonInventory.create({
				data: {
					cottonId: cotton.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
})
