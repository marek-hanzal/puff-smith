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
		cotton: await CottonService(prisma).toMap(cottonTransaction.cottonId),
		transaction: await TransactionService(prisma).toMap(cottonTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const cotton = await CottonService(prisma).toMap(create.cottonId);
		return TransactionService(prisma).handleTransaction({
			userId: create.userId,
			cost: cotton.cost,
			note: `Purchase of cotton [${cotton.vendor.name} ${cotton.name}]`,
			callback: async transaction => prisma.cottonInventory.create({
				data: {
					cottonId: cotton.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
})
