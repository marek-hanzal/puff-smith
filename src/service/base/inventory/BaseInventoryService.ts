import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBaseTransactionService, IBaseTransactionServiceCreate} from "@/puff-smith/service/base/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const BaseInventoryService = (request: IBaseTransactionServiceCreate = ServiceCreate()) => RepositoryService<IBaseTransactionService>({
	name: "base-inventory",
	source: request.prisma.baseInventory,
	mapper: async baseTransaction => ({
		...baseTransaction,
		base: await BaseService(request).toMap(baseTransaction.baseId),
		transaction: await TransactionService(request).toMap(baseTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const base = await BaseService({...request, prisma}).toMap(create.baseId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: create.userId,
			cost: base.cost,
			note: `Purchase of base [${base.vendor.name} ${base.name}]`,
			callback: async transaction => request.prisma.baseInventory.create({
				data: {
					baseId: base.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
