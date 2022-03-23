import prisma from "@/puff-smith/service/prisma";
import {ITransactionService} from "@/puff-smith/service/transaction/interface";
import {AbstractRepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";

export const TransactionService = (prismaClient: IPrismaClientTransaction = prisma): ITransactionService => {
	const service: ITransactionService = {
		...AbstractRepositoryService<ITransactionService>(prismaClient, prismaClient.transaction, async transaction => ({
			...transaction,
			amount: transaction.amount.toNumber(),
		})),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => await prismaClient.transaction.create({
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
		}
	};

	return service;
}
