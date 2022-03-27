import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {BaseService, IBaseTransactionService} from "@/puff-smith/service/base";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const BaseInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IBaseTransactionService => {
	const service: IBaseTransactionService = {
		...AbstractRepositoryService<IBaseTransactionService>(prismaClient, prismaClient.baseInventory, async baseTransaction => {
			const baseService = BaseService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(baseTransaction.transactionId);
			return {
				...baseTransaction,
				base: await baseService.toMap(baseTransaction.baseId),
				transaction,
			}
		}),
		handleCreate: async ({request}) => service.map(await service.create(request)),
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
	};

	return service;
}
