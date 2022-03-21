import {AtomizerTransaction} from '@prisma/client';
import {IAtomizerTransaction, IAtomizerTransactions} from "@/puff-smith/service/atomizer/interface";
import {transactionFetch, transactionMapper} from "@/puff-smith/service/transaction";
import {AtomizerService} from "@/puff-smith/service/atomizer/service";
import prisma from "@/puff-smith/service/prisma";

export const atomizerTransactionListMapper = async (atomizerTransactions: IAtomizerTransactions) => await Promise.all((await atomizerTransactions).map(atomizerTransactionMapper));

export const atomizerTransactionMapper = async (atomizerTransaction: AtomizerTransaction): Promise<IAtomizerTransaction> => {
	const atomizerService = AtomizerService(prisma);
	const atomizer = await atomizerService.fetch(atomizerTransaction.atomizerId);
	const transaction = await transactionFetch(atomizerTransaction.transactionId);
	return {
		...atomizerTransaction,
		atomizer: await atomizerService.map(atomizer),
		transaction: await transactionMapper(transaction),
	}
}
