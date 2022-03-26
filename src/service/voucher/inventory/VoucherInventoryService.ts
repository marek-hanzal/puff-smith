import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IVoucherInventoryService, VoucherService} from "@/puff-smith/service/voucher";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const VoucherInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IVoucherInventoryService => {
	const service: IVoucherInventoryService = {
		...AbstractRepositoryService<IVoucherInventoryService>(prismaClient, prismaClient.voucherInventory, async voucherTransaction => {
			const voucherService = VoucherService(prisma);
			const transactionService = TransactionService(prisma);
			const transaction = await transactionService.toMap(voucherTransaction.transactionId);
			return {
				...voucherTransaction,
				voucher: await voucherService.toMap(voucherTransaction.voucherId),
				transaction,
			}
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prisma.$transaction(async prisma => {
			const voucherService = VoucherService(prisma);
			const transactionService = TransactionService(prisma);
			const voucher = await voucherService.toMap(create.voucherId);
			voucher.maxFortune && (await transactionService.sumOf(create.userId)) >= voucher.maxFortune && (() => {
				throw new Error("Too much puffies")
			})();
			const transaction = await transactionService.create({
				amount: voucher.cost,
				note: `Gift from voucher [${voucher.name}]`,
				userId: create.userId,
			});
			return prisma.voucherInventory.create({
				data: {
					voucherId: voucher.id,
					transactionId: transaction.id,
					userId: create.userId,
				}
			});
		}),
	};

	return service;
}
