import {defaults} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IVoucherInventoryService, IVoucherInventoryServiceCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherService} from "@/puff-smith/service/voucher/VoucherService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const VoucherInventoryService = (request: IVoucherInventoryServiceCreate = defaults()): IVoucherInventoryService => {
	const voucherService = singletonOf(() => VoucherService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = request.userService.getUserId();

	return RepositoryService<IVoucherInventoryService>({
		name: "voucher-inventory",
		source: request.prisma.voucherInventory,
		mapper: async voucherTransaction => ({
			...voucherTransaction,
			voucher: await voucherService().toMap(voucherTransaction.voucherId),
			transaction: await transactionService().toMap(voucherTransaction.transactionId),
		}),
		create: async ({code, ...create}) => prisma.$transaction(async prisma => {
			const transactionService = TransactionService({...request, prisma});
			const voucher = await voucherService().toMap(create.voucherId);
			voucher.maxFortune && (await transactionService.sumOf()) >= voucher.maxFortune && (() => {
				throw new Error("Too much puffies");
			})();
			const transaction = await transactionService.create({
				amount: voucher.cost,
				note: `Gift from voucher [${voucher.name}]`,
				userId,
			});
			return prisma.voucherInventory.create({
				data: {
					code: code || codeService().code(),
					voucherId: voucher.id,
					transactionId: transaction.id,
					userId,
				}
			});
		}),
	});
};
