import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBaseTransactionService} from "@/puff-smith/service/base/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const BaseInventoryService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IBaseTransactionService>({
	name: "base-inventory",
	source: prismaClient.baseInventory,
	mapper: async baseTransaction => ({
		...baseTransaction,
		base: await BaseService(prismaClient).toMap(baseTransaction.baseId),
		transaction: await TransactionService(prismaClient).toMap(baseTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const base = await BaseService(prismaClient).toMap(create.baseId);
		return TransactionService(prismaClient).handleTransaction({
			userId: create.userId,
			cost: base.cost,
			note: `Purchase of base [${base.vendor.name} ${base.name}]`,
			callback: async transaction => prismaClient.baseInventory.create({
				data: {
					baseId: base.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
