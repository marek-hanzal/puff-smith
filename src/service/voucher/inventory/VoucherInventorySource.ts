import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IVoucherInventorySource} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherSource} from "@/puff-smith/service/voucher/VoucherSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const VoucherInventorySource = (): IVoucherInventorySource => {
	const voucherSource = singletonOf(() => VoucherSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IVoucherInventorySource = Source<IVoucherInventorySource>({
		name: "voucher-inventory",
		prisma,
		map: async voucherInventory => voucherInventory ? ({
			...voucherInventory,
			voucher: await voucherSource().mapper.map(voucherInventory.voucher),
			transaction: await transactionSource().mapper.map(voucherInventory.transaction),
		}) : undefined,
		acl: {
			lock: true,
		},
		source: {
			create: async ({code, ...create}) => prisma.$transaction(async prisma => {
				const transactionSource = TransactionSource().ofSource(source).withPrisma(prisma);
				const voucher = await voucherSource().withPrisma(prisma).get(create.voucherId);
				voucher.maxFortune && (await transactionSource.sumOf()) >= voucher.maxFortune && (() => {
					throw new Error("Too much puffies");
				})();
				const transaction = await transactionSource.create({
					amount: voucher.cost,
					note: `Gift from voucher [${voucher.name}]`,
					userId: source.user.required(),
				});
				return prisma.voucherInventory.create({
					data: {
						code: code || codeService().code(),
						voucherId: voucher.id,
						transactionId: transaction.id,
						userId: source.user.required(),
					},
					include: {
						transaction: true,
						voucher: true,
					},
				});
			}),
		}
	});

	return source;
};
