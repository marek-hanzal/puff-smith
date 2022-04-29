import {ServiceCreate} from "@/puff-smith/service";
import {PriceService} from "@/puff-smith/service/price/PriceService";
import {ITransactionService, ITransactionServiceCreate} from "@/puff-smith/service/transaction/interface";
import {RepositoryService} from "@leight-core/server";

export const TransactionService = (request: ITransactionServiceCreate = ServiceCreate()): ITransactionService => {
	const sum: ITransactionService["sum"] = async query => (await request.prisma.transaction.aggregate({
		where: query.filter,
		orderBy: query.orderBy,
		_sum: {
			amount: true,
		}
	}))._sum.amount?.toNumber() || 0;
	const sumOf: ITransactionService["sumOf"] = userId => sum({
		filter: {
			userId,
		},
		orderBy: {
			created: "asc",
		}
	});

	const service: ITransactionService = {
		...RepositoryService<ITransactionService>({
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
			const transaction = await service.create({
				amount: -1 * (cost || 0),
				note,
				userId,
			});
			(await sumOf(userId)) < 0 && (() => {
				throw new Error("Not enough puffies");
			})();
			return callback(transaction);
		},
		check: async ({userId, price, tariff}) => {
			const _sum = sumOf(userId);
			const _price = await PriceService(request).priceOf(tariff || "default", price);
			return {
				price: _price.price.toNumber(),
				pass: (await _sum) >= _price.price.toNumber(),
			};
		}
	};

	return service;
};
