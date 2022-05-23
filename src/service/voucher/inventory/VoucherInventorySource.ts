import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IVoucherInventorySource, IVoucherInventorySourceCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherSource} from "@/puff-smith/service/voucher/VoucherSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const VoucherInventorySource = (request: IVoucherInventorySourceCreate): IVoucherInventorySource => {
	const voucherSource = singletonOf(() => VoucherSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return Source<IVoucherInventorySource>({
		name: "voucher-inventory",
		source: request.prisma.voucherInventory,
		mapper: async voucherTransaction => ({
			...voucherTransaction,
			voucher: await voucherSource().toMap(voucherTransaction.voucherId),
			transaction: await transactionSource().toMap(voucherTransaction.transactionId),
		}),
		create: async ({code, ...create}) => prisma.$transaction(async prisma => {
			const transactionSource = TransactionSource({...request, prisma});
			const voucher = await voucherSource().toMap(create.voucherId);
			voucher.maxFortune && (await transactionSource.sumOf()) >= voucher.maxFortune && (() => {
				throw new Error("Too much puffies");
			})();
			const transaction = await transactionSource.create({
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
