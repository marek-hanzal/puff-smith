import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/interface";
import prisma from "@/puff-smith/service/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const AtomizerInventoryService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IAtomizerInventoryService>({
	name: "atomizer-inventory",
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
