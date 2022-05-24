import {IWithAromaEntity} from "@/puff-smith/service/aroma/interface";
import {IMixture, IWithMixtureEntity} from "@/puff-smith/service/mixture/interface";
import {ITransaction, IWithTransactionEntity} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ILiquidCreate {
	code?: string;
	mixed?: Date;
	mixtureId: string;
}

export interface ILiquid {
	id: string;
	code: string;
	created: string;
	mixed: string;
	transaction: ITransaction;
	transactionId: string;
	mixture: IMixture;
	mixtureId: string;
}

export type ILiquidWhere = Prisma.LiquidWhereInput & IWithFulltext;

export interface ILiquidQuery extends IQuery<ILiquidWhere, Prisma.LiquidOrderByWithRelationInput> {
}

export type ILiquidEntity = Liquid & IWithAromaEntity & IWithMixtureEntity & IWithTransactionEntity;

export interface ILiquidFetchProps {
	liquid: ILiquid;
}

export interface ILiquidFetchQuery extends ParsedUrlQuery {
	liquidId: string;
}

export interface ILiquidSource extends ISource<ILiquidCreate, ILiquidEntity, ILiquid, ILiquidQuery> {
}
