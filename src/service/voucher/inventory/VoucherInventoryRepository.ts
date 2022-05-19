import {defaults} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {IVoucherInventoryService, IVoucherInventoryServiceCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherRepository} from "@/puff-smith/service/voucher/VoucherRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const VoucherInventoryRepository = (request: IVoucherInventoryServiceCreate = defaults()): IVoucherInventoryService => {
	const voucherService = singletonOf(() => VoucherRepository(request));
	const transactionService = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return Repository<IVoucherInventoryService>({
		name: "voucher-inventory",
		source: request.prisma.voucherInventory,
		mapper: async voucherTransaction => ({
			...voucherTransaction,
			voucher: await voucherService().toMap(voucherTransaction.voucherId),
			transaction: await transactionService().toMap(voucherTransaction.transactionId),
		}),
		create: async ({code, ...create}) => prisma.$transaction(async prisma => {
			const transactionService = TransactionRepository({...request, prisma});
			const voucher = await voucherService().toMap(create.voucherId);
			voucher.maxFortune && (await transactionService.sumOf()) >= voucher.maxFortune && (() => {
				throw new Error("Too much puffies");
			})();
			const transaction = await transactionService.create({
				amount: voucher.cost,
				note: `Gift from voucher [${voucher.name}]`,
				userId: userId(),
			});
			return prisma.voucherInventory.create({
				data: {
					code: code || codeService().code(),
					voucherId: voucher.id,
					transactionId: transaction.id,
					userId: userId(),
				}
			});
		}),
	});
};
