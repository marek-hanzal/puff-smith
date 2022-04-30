import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaInventoryService, IAromaInventoryServiceCreate} from "@/puff-smith/service/aroma/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const AromaInventoryService = (request: IAromaInventoryServiceCreate = ServiceCreate()): IAromaInventoryService => RepositoryService<IAromaInventoryService>({
	name: "aroma-inventory",
	source: request.prisma.aromaInventory,
	mapper: async aromaTransaction => ({
		...aromaTransaction,
		aroma: await AromaService(request).toMap(aromaTransaction.aromaId),
		transaction: await TransactionService(request).toMap(aromaTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const aroma = await AromaService({...request, prisma}).toMap(create.aromaId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: request.userService.getUserId(),
			cost: aroma.cost,
			note: `Purchase of aroma [${aroma.vendor.name} ${aroma.name}]`,
			callback: async transaction => request.prisma.aromaInventory.create({
				data: {
					aromaId: aroma.id,
					transactionId: transaction.id,
					userId: request.userService.getUserId(),
				}
			}),
		});
	}),
});
