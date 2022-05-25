import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITransactionSource} from "@/puff-smith/service/transaction/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const TransactionSource = (): ITransactionSource => {
	const priceSource = singletonOf(() => PriceSource());

	const source: ITransactionSource = Source<ITransactionSource>({
		name: "transaction",
		prisma,
		map: async transaction => transaction ? ({
			...transaction,
			created: transaction.created.toUTCString(),
			amount: transaction.amount.toNumber(),
		}) : undefined,
		source: {
			create: async create => source.prisma.transaction.create({
				data: {
					...create,
					created: new Date(),
				},
			}),
		},
		sum: async query => (await source.prisma.transaction.aggregate({
			where: query.filter,
			orderBy: query.orderBy,
			_sum: {
				amount: true,
			}
		}))._sum.amount?.toNumber() || 0,
		sumOf: () => source.sum({
			filter: {
				userId: source.user.required(),
			},
			orderBy: {
				created: "asc",
			}
		}),
		handleTransaction: async ({userId, cost, callback, note}) => {
			const transactionService = TransactionSource().withUserId(userId);
			const transaction = await transactionService.create({
				amount: -1 * (cost || 0),
				note,
				userId,
			});
			(await transactionService.sumOf()) < 0 && (() => {
				throw new Error("Not enough puffies");
			})();
			return callback(transaction);
		},
		check: async ({price, tariff}) => {
			const $sum = source.sumOf();
			const $price = await priceSource().priceOf(tariff || "default", price);
			return {
				price: $price.price.toNumber(),
				pass: (await $sum) >= $price.price.toNumber(),
			};
		}
	});

	return source;
};
