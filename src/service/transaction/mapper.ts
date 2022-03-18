import {ITransaction, ITransactions} from "@/puff-smith/service/transaction/interface";
import {Transaction} from "@prisma/client";
import prismaClient from "@/puff-smith/service/prisma";

export const transactionListMapper = async (transactions: ITransactions) => (await transactions).map(transactionMapper);

export const transactionMapper = (transaction: Transaction): ITransaction => {
	return {
		...transaction,
		amount: transaction.amount.toNumber(),
	};
}

export const transactionFetch = async (transactionId: string) => prismaClient.transaction.findFirst({
	where: {
		id: transactionId,
	}
})

export const transactionRequire = async (transactionId: string) => (await transactionFetch(transactionId))!!;
