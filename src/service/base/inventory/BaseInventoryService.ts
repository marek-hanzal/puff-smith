import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {BaseService, IBaseTransactionService} from "@/puff-smith/service/base";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BaseInventoryService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IBaseTransactionService>({
	name: 'base-inventory',
	source: prismaClient.baseInventory,
	mapper: async baseTransaction => {
		const baseService = BaseService(prisma);
		const transactionService = TransactionService(prisma);
		const transaction = await transactionService.toMap(baseTransaction.transactionId);
		return {
			...baseTransaction,
			base: await baseService.toMap(baseTransaction.baseId),
			transaction,
		}
	},
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
})
