import {defaults} from "@/puff-smith/service";
import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import {ITransactionSource, ITransactionSourceCreate} from "@/puff-smith/service/transaction/interface";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const TransactionSource = (request: ITransactionSourceCreate): ITransactionSource => {
	const priceSource = singletonOf(() => PriceSource(request));
	const userId = singletonOf(() => request.userService.getUserId());

	const sum: ITransactionSource["sum"] = async query => (await request.prisma.transaction.aggregate({
		where: query.filter,
		orderBy: query.orderBy,
		_sum: {
			amount: true,
		}
	}))._sum.amount?.toNumber() || 0;
	const sumOf: ITransactionSource["sumOf"] = () => sum({
		filter: {
			userId: userId(),
		},
		orderBy: {
			created: "asc",
		}
	});

	return {
		...Source<ITransactionSource>({
			name: "transaction",
			source: request.prisma.transaction,
			mapper: async transaction => ({
				...transaction,
				created: transaction.created.toUTCString(),
				amount: transaction.amount.toNumber(),
			}),
			create: async create => request.prisma.transaction.create({
				data: {
					...create,
					created: new Date(),
				},
			}),
		}),
		sum,
		sumOf,
		handleTransaction: async ({userId, cost, callback, note}) => {
			const transactionService = TransactionSource(defaults(userId));
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
			const $sum = sumOf();
			const $price = await priceSource().priceOf(tariff || "default", price);
			return {
				price: $price.price.toNumber(),
				pass: (await $sum) >= $price.price.toNumber(),
			};
		}
	};
};
