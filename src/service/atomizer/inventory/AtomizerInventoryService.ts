import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {AtomizerService, IAtomizerInventoryService} from "@/puff-smith/service/atomizer";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";

export const AtomizerInventoryService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IAtomizerInventoryService>({
	name: 'atomizer-inventory',
	source: prismaClient.atomizerInventory,
	mapper: async atomizerInventory => ({
		...atomizerInventory,
		atomizer: await AtomizerService(prisma).toMap(atomizerInventory.atomizerId),
		transaction: await TransactionService(prisma).toMap(atomizerInventory.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const atomizer = await AtomizerService(prismaClient).toMap(create.atomizerId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: atomizer.cost,
			note: `Purchase of atomizer [${atomizer.vendor.name} ${atomizer.name}]`,
			callback: async transaction => prismaClient.atomizerInventory.create({
				data: {
					atomizerId: atomizer.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
