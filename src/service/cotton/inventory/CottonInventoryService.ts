import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {CottonService, ICottonInventoryService} from "@/puff-smith/service/cotton";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const CottonInventoryService = (prismaClient: IPrismaClientTransaction = prisma): ICottonInventoryService => {
	const service: ICottonInventoryService = {
		...AbstractRepositoryService<ICottonInventoryService>(prismaClient, prismaClient.cottonInventory, async cottonTransaction => {
			const cottonService = CottonService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(cottonTransaction.transactionId);
			return {
				...cottonTransaction,
				cotton: await cottonService.toMap(cottonTransaction.cottonId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const cotton = await CottonService(prisma).toMap(create.cottonId);
			return TransactionService(prisma).handleTransaction(create.userId, cotton.cost, async transaction => prisma.cottonInventory.create({
				data: {
					cottonId: cotton.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			}), `Purchase of cotton [${cotton.vendor.name} ${cotton.name}]`);
		}),
	};

	return service;
}
