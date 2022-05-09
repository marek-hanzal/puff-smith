import {IServiceCreate} from "@/puff-smith/service";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ILiquidCreate {
	code?: string;
	mixed?: Date;
	mixtureId: string;
}

export interface ILiquidDelete {
	ids: string[];
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

export interface ILiquidQuery extends IQuery<Prisma.LiquidWhereInput, Prisma.LiquidOrderByWithRelationInput> {
}

export interface ILiquidFetchProps {
	liquid: ILiquid;
}

export interface ILiquidFetchQuery extends ParsedUrlQuery {
	liquidId: string;
}

export interface ILiquidServiceCreate extends IServiceCreate {
}

export interface ILiquidService extends IRepositoryService<ILiquidCreate, Liquid, ILiquid, ILiquidQuery, ILiquidFetchProps, ILiquidFetchQuery> {
	handleDelete(request: { request: ILiquidDelete }): Promise<ILiquid[]>;
}
