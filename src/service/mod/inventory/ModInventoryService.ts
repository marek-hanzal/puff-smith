import {ServiceCreate} from "@/puff-smith/service";
import {IModTransactionService, IModTransactionServiceCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const ModInventoryService = (request: IModTransactionServiceCreate = ServiceCreate()): IModTransactionService => RepositoryService<IModTransactionService>({
	name: "mod-inventory",
	source: request.prisma.modInventory,
	mapper: async modTransaction => ({
		...modTransaction,
		mod: await ModService(request).toMap(modTransaction.modId),
		transaction: await TransactionService(request).toMap(modTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const mod = await ModService({...request, prisma}).toMap(create.modId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: create.userId,
			cost: mod.cost,
			note: `Purchase of mod [${mod.vendor.name} ${mod.name}]`,
			callback: async transaction => request.prisma.modInventory.create({
				data: {
					modId: mod.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
