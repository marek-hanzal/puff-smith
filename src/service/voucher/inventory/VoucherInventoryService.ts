import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IVoucherInventoryService, IVoucherInventoryServiceCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherService} from "@/puff-smith/service/voucher/VoucherService";
import {RepositoryService} from "@leight-core/server";

export const VoucherInventoryService = (request: IVoucherInventoryServiceCreate = ServiceCreate()): IVoucherInventoryService => RepositoryService<IVoucherInventoryService>({
	name: "voucher-inventory",
	source: request.prisma.voucherInventory,
	mapper: async voucherTransaction => ({
		...voucherTransaction,
		voucher: await VoucherService(request).toMap(voucherTransaction.voucherId),
		transaction: await TransactionService(request).toMap(voucherTransaction.transactionId),
	}),
	create: async ({code, ...create}) => prisma.$transaction(async prisma => {
		const transactionService = TransactionService({...request, prisma});
		const voucher = await VoucherService(request).toMap(create.voucherId);
		voucher.maxFortune && (await transactionService.sumOf(request.userService.getUserId())) >= voucher.maxFortune && (() => {
			throw new Error("Too much puffies");
		})();
		const transaction = await transactionService.create({
			amount: voucher.cost,
			note: `Gift from voucher [${voucher.name}]`,
			userId: request.userService.getUserId(),
		});
		return prisma.voucherInventory.create({
			data: {
				code: code || CodeService().code(),
				voucherId: voucher.id,
				transactionId: transaction.id,
				userId: request.userService.getUserId(),
			}
		});
	}),
});
