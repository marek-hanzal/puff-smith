import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IWireInventoryService, IWireInventoryServiceCreate} from "@/puff-smith/service/wire/inventory/interface";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {RepositoryService} from "@leight-core/server";

export const WireInventoryService = (request: IWireInventoryServiceCreate = ServiceCreate()): IWireInventoryService => RepositoryService<IWireInventoryService>({
	name: "wire-inventory",
	source: request.prisma.wireInventory,
	mapper: async wireTransaction => ({
		...wireTransaction,
		wire: await WireService(request).toMap(wireTransaction.wireId),
		transaction: await TransactionService(request).toMap(wireTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const wire = await WireService({...request, prisma}).toMap(create.wireId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: request.userService.getUserId(),
			cost: wire.cost,
			note: `Purchase of wire [${wire.vendor.name} ${wire.name}]`,
			callback: async transaction => prisma.wireInventory.create({
				data: {
					wireId: wire.id,
					transactionId: transaction.id,
					userId: request.userService.getUserId(),
				}
			}),
		});
	}),
});
