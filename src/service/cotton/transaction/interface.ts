import {CottonTransaction, Prisma} from "@prisma/client";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {ITransaction} from "@/puff-smith/service/transaction";
import {ICotton} from "@/puff-smith/service/cotton";
import {ParsedUrlQuery} from "querystring";

export interface ICottonTransactionCreate {
	userId: string;
	cottonId: string;
}

export interface ICottonTransaction {
	id: string;
	cotton: ICotton;
	transaction: ITransaction;
}

export interface ICottonTransactionQuery extends IQuery<Prisma.CottonWhereInput, Prisma.CottonOrderByWithRelationInput> {
}

export interface ICottonTransactionFetchProps {
	cottonTransaction: ICottonTransaction;
}

export interface ICottonTransactionFetchQuery extends ParsedUrlQuery {
	cottonTransactionId: string;
}

export type ICottonTransactionService = IRepositoryService<ICottonTransactionCreate, CottonTransaction, ICottonTransaction, ICottonTransactionQuery, ICottonTransactionFetchProps, ICottonTransactionFetchQuery>;
