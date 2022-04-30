import {ServiceCreate} from "@/puff-smith/service";
import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICottonInventoryService, ICottonInventoryServiceCreate} from "@/puff-smith/service/cotton/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const CottonInventoryService = (request: ICottonInventoryServiceCreate = ServiceCreate()): ICottonInventoryService => RepositoryService<ICottonInventoryService>({
	name: "cotton-inventory",
	source: request.prisma.cottonInventory,
	mapper: async cottonTransaction => ({
		...cottonTransaction,
		cotton: await CottonService(request).toMap(cottonTransaction.cottonId),
		transaction: await TransactionService(request).toMap(cottonTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const cotton = await CottonService({...request, prisma}).toMap(create.cottonId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: request.userService.getUserId(),
			cost: cotton.cost,
			note: `Purchase of cotton [${cotton.vendor.name} ${cotton.name}]`,
			callback: async transaction => prisma.cottonInventory.create({
				data: {
					cottonId: cotton.id,
					transactionId: transaction.id,
					userId: request.userService.getUserId(),
				}
			}),
		});
	}),
});
