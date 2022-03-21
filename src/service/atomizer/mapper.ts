import {Atomizer, AtomizerTransaction} from '@prisma/client';
import {IAtomizer, IAtomizers, IAtomizerTransaction, IAtomizerTransactions} from "@/puff-smith/service/atomizer/interface";
import {vendorMapper, vendorRequire} from "@/puff-smith/service/vendor";
import {transactionFetch, transactionMapper} from "@/puff-smith/service/transaction";
import {atomizerFetch} from "@/puff-smith/service/atomizer/prisma";

export const atomizerListMapper = async (atomizers: IAtomizers) => await Promise.all((await atomizers).map(atomizerMapper));

export const atomizerMapper = async (atomizer: Atomizer): Promise<IAtomizer> => {
	const vendor = await vendorRequire(atomizer.vendorId);
	return {
		...atomizer,
		vendor: vendorMapper(vendor),
		cost: atomizer?.cost?.toNumber(),
	};
}

export const atomizerTransactionListMapper = async (atomizerTransactions: IAtomizerTransactions) => await Promise.all((await atomizerTransactions).map(atomizerTransactionMapper));

export const atomizerTransactionMapper = async (atomizerTransaction: AtomizerTransaction): Promise<IAtomizerTransaction> => {
	const atomizer = await atomizerFetch(atomizerTransaction.atomizerId);
	const transaction = await transactionFetch(atomizerTransaction.transactionId);
	return {
		...atomizerTransaction,
		atomizer: await atomizerMapper(atomizer),
		transaction: await transactionMapper(transaction),
	}
}
