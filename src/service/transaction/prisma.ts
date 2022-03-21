import prismaClient from "@/puff-smith/service/prisma";
import {ITransactionCreate, ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {toQuery} from "@leight-core/server";
import {transactionListMapper} from "@/puff-smith/service/transaction/mapper";
import {IPrismaClientTransaction} from "@leight-core/api";

export async function transactionCreate(transaction: ITransactionCreate, prisma: IPrismaClientTransaction = prismaClient) {
	return await prisma.transaction.create({
		data: {
			...transaction,
			created: new Date(),
		},
	});
}

export const transactionQuery = async (query: ITransactionQuery) => toQuery<typeof transactionListMapper, ITransactionQuery>({
	query,
	source: prismaClient.transaction,
	mapper: transactionListMapper,
})

export const transactionSum = async (query: ITransactionQuery, prisma: IPrismaClientTransaction = prismaClient) => {
	return (await prisma.transaction.aggregate({
		where: query.filter,
		orderBy: query.orderBy,
		_sum: {
			amount: true,
		}
	}))._sum.amount?.toNumber() || 0;
}

export async function transactionPuffiesOf(userId: string) {
	return transactionSum({
		filter: {
			userId,
		},
		orderBy: {
			created: 'asc',
		}
	});
}
