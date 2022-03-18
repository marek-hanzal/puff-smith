import prismaClient from "@/puff-smith/service/prisma";
import {ITransactionCreate} from "@/puff-smith/service/transaction/interface";

export async function transactionCreate(transaction: ITransactionCreate) {
	return await prismaClient.transaction.create({
		data: {
			...transaction,
			created: new Date(),
		},
	});
}

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
