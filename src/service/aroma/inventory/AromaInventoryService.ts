import prisma from "@/puff-smith/service/prisma";
import {AromaService, IAromaInventoryService} from "@/puff-smith/service/aroma";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const AromaInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IAromaInventoryService => RepositoryService<IAromaInventoryService>({
	name: 'aroma-inventory',
	source: prismaClient.aromaInventory,
	mapper: async aromaTransaction => {
		const aromaService = AromaService(prisma);
		const transactionService = TransactionService(prisma);
		const transaction = await transactionService.toMap(aromaTransaction.transactionId);
		return {
			...aromaTransaction,
			aroma: await aromaService.toMap(aromaTransaction.aromaId),
			transaction,
		}
	},
	create: async create => prisma.$transaction(async prisma => {
		const aroma = await AromaService(prisma).toMap(create.aromaId);
		return TransactionService(prisma).handleTransaction({
			userId: create.userId,
			cost: aroma.cost,
			note: `Purchase of aroma [${aroma.vendor.name} ${aroma.name}]`,
			callback: async transaction => prisma.aromaInventory.create({
				data: {
					aromaId: aroma.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
})
