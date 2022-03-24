import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IVoucherTransactionService, VoucherService} from "@/puff-smith/service/voucher";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export const VoucherTransactionService = (prismaClient: IPrismaClientTransaction = prisma): IVoucherTransactionService => {
	const service: IVoucherTransactionService = {
		...AbstractRepositoryService<IVoucherTransactionService>(prismaClient, prismaClient.voucherTransaction, async voucherTransaction => {
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
			const transaction = await transactionService.create({
				amount: -1 * (voucher.cost || 0),
				note: `Purchase of voucher [${voucher.name}]`,
				userId: create.userId,
			});
			(await transactionService.sumOf(create.userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return prisma.voucherTransaction.create({
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
