import prismaClient from "@/puff-smith/service/prisma";
import {ITransactionCreate, ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {toQuery} from "@leight-core/server";
import {transactionListMapper} from "@/puff-smith/service/transaction/mapper";

export async function transactionCreate(transaction: ITransactionCreate) {
	return await prismaClient.transaction.create({
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

export async function transactionPuffiesOf(userId: string) {
	return (await prismaClient.transaction.aggregate({
		where: {
			userId,
		},
		orderBy: {
			created: 'asc',
		},
		_sum: {
			amount: true,
		}
	}))._sum.amount?.toNumber() || 0;
}
