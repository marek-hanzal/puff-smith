import {IModTransactionService} from "@/puff-smith/service/mod/inventory/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const ModInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IModTransactionService => RepositoryService<IModTransactionService>({
	name: "mod-inventory",
	source: prismaClient.modInventory,
	mapper: async modTransaction => ({
		...modTransaction,
		mod: await ModService(prismaClient).toMap(modTransaction.modId),
		transaction: await TransactionService(prismaClient).toMap(modTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const mod = await ModService(prismaClient).toMap(create.modId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: mod.cost,
			note: `Purchase of mod [${mod.vendor.name} ${mod.name}]`,
			callback: async transaction => prismaClient.modInventory.create({
				data: {
					modId: mod.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
