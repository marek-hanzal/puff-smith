import prisma from "@/puff-smith/service/prisma";
import {AromaService, IAromaInventoryService} from "@/puff-smith/service/aroma";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const AromaInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IAromaInventoryService => RepositoryService<IAromaInventoryService>({
	name: 'aroma-inventory',
	source: prismaClient.aromaInventory,
	mapper: async aromaTransaction => ({
		...aromaTransaction,
		aroma: await AromaService(prismaClient).toMap(aromaTransaction.aromaId),
		transaction: await TransactionService(prismaClient).toMap(aromaTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const aroma = await AromaService(prismaClient).toMap(create.aromaId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: aroma.cost,
			note: `Purchase of aroma [${aroma.vendor.name} ${aroma.name}]`,
			callback: async transaction => prismaClient.aromaInventory.create({
				data: {
					aromaId: aroma.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
})
