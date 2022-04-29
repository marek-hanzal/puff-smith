import {ServiceCreate} from "@/puff-smith/service";
import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizerInventoryService, IAtomizerInventoryServiceCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const AtomizerInventoryService = (request: IAtomizerInventoryServiceCreate = ServiceCreate()) => RepositoryService<IAtomizerInventoryService>({
	name: "atomizer-inventory",
	source: request.prisma.atomizerInventory,
	mapper: async atomizerInventory => ({
		...atomizerInventory,
		atomizer: await AtomizerService(request).toMap(atomizerInventory.atomizerId),
		transaction: await TransactionService(request).toMap(atomizerInventory.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const atomizer = await AtomizerService({...request, prisma}).toMap(create.atomizerId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: create.userId,
			cost: atomizer.cost,
			note: `Purchase of atomizer [${atomizer.vendor.name} ${atomizer.name}]`,
			callback: async transaction => prisma.atomizerInventory.create({
				data: {
					atomizerId: atomizer.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}),
		});
	}),
});
