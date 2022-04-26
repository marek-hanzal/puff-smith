import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IVoucherInventoryService} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherService} from "@/puff-smith/service/voucher/VoucherService";
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
	create: async ({code, ...create}) => prisma.$transaction(async prismaClient => {
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
				code: code || CodeService().code(),
				voucherId: voucher.id,
				transactionId: transaction.id,
				userId: create.userId,
			}
		});
	}),
});
