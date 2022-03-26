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
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const atomizerService = AtomizerService(prisma);
			const transactionService = TransactionService(prisma);
			const atomizer = await atomizerService.toMap(create.atomizerId);
			const transaction = await transactionService.create({
				amount: -1 * (atomizer.cost || 0),
				note: `Purchase of atomizer [${atomizer.vendor.name} ${atomizer.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.atomizerInventory.create({
				data: {
					atomizerId: atomizer.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
