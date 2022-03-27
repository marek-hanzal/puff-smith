import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {AtomizerService, IAtomizerInventoryService} from "@/puff-smith/service/atomizer";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";

export const AtomizerInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IAtomizerInventoryService => {
	const service: IAtomizerInventoryService = {
		...AbstractRepositoryService<IAtomizerInventoryService>(prismaClient, prismaClient.atomizerInventory, async atomizerInventory => {
			const atomizerService = AtomizerService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(atomizerInventory.transactionId);
			return {
				...atomizerInventory,
				atomizer: await atomizerService.toMap(atomizerInventory.atomizerId),
				transaction,
			}
		}),
		handleCreate: async ({request}) => service.map(await service.create(request)),
		create: async create => prisma.$transaction(async prismaClient => {
			const atomizer = await AtomizerService(prismaClient).toMap(create.atomizerId);
			return TransactionService(prismaClient).handleTransaction({
				userId: create.userId,
				cost: atomizer.cost,
				note: `Purchase of atomizer [${atomizer.vendor.name} ${atomizer.name}]`,
				callback: async transaction => prismaClient.atomizerInventory.create({
					data: {
						atomizerId: atomizer.id,
						transactionId: transaction.id,
						userId: create.userId,
					}
				}),
			});
		}),
	};

	return service;
}
