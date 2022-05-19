import {defaults} from "@/puff-smith/service";
import {PriceRepository} from "@/puff-smith/service/price/PriceRepository";
import {ITransactionRepository, ITransactionRepositoryCreate} from "@/puff-smith/service/transaction/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const TransactionRepository = (request: ITransactionRepositoryCreate): ITransactionRepository => {
	const priceRepository = singletonOf(() => PriceRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	const sum: ITransactionRepository["sum"] = async query => (await request.prisma.transaction.aggregate({
		where: query.filter,
		orderBy: query.orderBy,
		_sum: {
			amount: true,
		}
	}))._sum.amount?.toNumber() || 0;
	const sumOf: ITransactionRepository["sumOf"] = () => sum({
		filter: {
			userId: userId(),
		},
		orderBy: {
			created: "asc",
		}
	});

	return {
		...Repository<ITransactionRepository>({
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
			const transactionService = TransactionRepository(defaults(userId));
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
			const $price = await priceRepository().priceOf(tariff || "default", price);
			return {
				price: $price.price.toNumber(),
				pass: (await $sum) >= $price.price.toNumber(),
			};
		}
	};
};
