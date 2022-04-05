import prisma from "@/puff-smith/service/prisma";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IVoucherInventoryService, VoucherService} from "@/puff-smith/service/voucher";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const VoucherInventoryService = (prismaClient: IPrismaClientTransaction = prisma): IVoucherInventoryService => RepositoryService<IVoucherInventoryService>({
	name: "voucher-inventory",
	source: prismaClient.voucherInventory,
	mapper: async voucherTransaction => ({
		...voucherTransaction,
		voucher: await VoucherService(prismaClient).toMap(voucherTransaction.voucherId),
		transaction: await TransactionService(prismaClient).toMap(voucherTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prismaClient => {
		const transactionService = TransactionService(prismaClient);
		const voucher = await VoucherService(prismaClient).toMap(create.voucherId);
		voucher.maxFortune && (await transactionService.sumOf(create.userId)) >= voucher.maxFortune && (() => {
			throw new Error("Too much puffies");
		})();
		const transaction = await transactionService.create({
			amount: voucher.cost,
			note: `Gift from voucher [${voucher.name}]`,
			userId: create.userId,
		});
		return prismaClient.voucherInventory.create({
			data: {
				voucherId: voucher.id,
				transactionId: transaction.id,
				userId: create.userId,
			}
		});
	}),
});
