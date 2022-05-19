import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {IVoucherInventoryRepository, IVoucherInventoryRepositoryCreate} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherRepository} from "@/puff-smith/service/voucher/VoucherRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const VoucherInventoryRepository = (request: IVoucherInventoryRepositoryCreate): IVoucherInventoryRepository => {
	const voucherRepository = singletonOf(() => VoucherRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return Repository<IVoucherInventoryRepository>({
		name: "voucher-inventory",
		source: request.prisma.voucherInventory,
		mapper: async voucherTransaction => ({
			...voucherTransaction,
			voucher: await voucherRepository().toMap(voucherTransaction.voucherId),
			transaction: await transactionRepository().toMap(voucherTransaction.transactionId),
		}),
		create: async ({code, ...create}) => prisma.$transaction(async prisma => {
			const transactionRepository = TransactionRepository({...request, prisma});
			const voucher = await voucherRepository().toMap(create.voucherId);
			voucher.maxFortune && (await transactionRepository.sumOf()) >= voucher.maxFortune && (() => {
				throw new Error("Too much puffies");
			})();
			const transaction = await transactionRepository.create({
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
