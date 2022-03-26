import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {AromaService, IAromaInventoryService} from "@/puff-smith/service/aroma";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const AromaInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IAromaInventoryService => {
	const service: IAromaInventoryService = {
		...AbstractRepositoryService<IAromaInventoryService>(prismaClient, prismaClient.aromaInventory, async aromaTransaction => {
			const aromaService = AromaService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(aromaTransaction.transactionId);
			return {
				...aromaTransaction,
				aroma: await aromaService.toMap(aromaTransaction.aromaId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const aroma = await AromaService(prisma).toMap(create.aromaId);
			return TransactionService(prisma).handleTransaction(create.userId, aroma.cost, async transaction => prisma.aromaInventory.create({
				data: {
					aromaId: aroma.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}), `Purchase of aroma [${aroma.vendor.name} ${aroma.name}]`);
		}),
	};

	return service;
}
