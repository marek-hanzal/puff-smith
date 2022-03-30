import prisma from "@/puff-smith/service/prisma";
import {ITransactionService} from "@/puff-smith/service/transaction/interface";
import {AbstractRepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {PriceService} from "@/puff-smith/service/price";

export const TransactionService = (prismaClient: IPrismaClientTransaction = prisma): ITransactionService => {
	const service: ITransactionService = {
		...AbstractRepositoryService<ITransactionService>(prismaClient, prismaClient.transaction, async transaction => ({
			...transaction,
			created: transaction.created.toUTCString(),
			amount: transaction.amount.toNumber(),
		})),
		handleCreate: async ({request}) => service.map(await service.create(request)),
		create: async create => prismaClient.transaction.create({
			data: {
				...create,
				created: new Date(),
			},
		}),
		sum: async query => (await prismaClient.transaction.aggregate({
			where: query.filter,
			orderBy: query.orderBy,
			_sum: {
				amount: true,
			}
		}))._sum.amount?.toNumber() || 0,
		async sumOf(userId) {
			return service.sum({
				filter: {
					userId,
				},
				orderBy: {
					created: 'asc',
				}
			});
		},
		handleTransaction: async ({userId, cost, callback, note}) => {
			const transaction = await service.create({
				amount: -1 * (cost || 0),
				note,
				userId,
			});
			(await service.sumOf(userId)) < 0 && (() => {
				throw new Error("Not enough puffies")
			})();
			return callback(transaction);
		},
		check: async ({userId, price, tariff}) => {
			const _sum = service.sumOf(userId);
			const _price = await PriceService(prismaClient).priceOf(tariff || 'default', price);
			return {
				price: _price.price.toNumber(),
				pass: (await _sum) >= _price.price.toNumber(),
			};
		}
	};

	return service;
}
