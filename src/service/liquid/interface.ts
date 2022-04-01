import {IQuery, IRepositoryService} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";
import {ITransaction} from "@/puff-smith/service/transaction";

export interface ILiquidCreate {
	name: string;
	volume: number;
	mixed?: Date;
	userId: string;
}

export interface ILiquid {
	id: string;
	name: string;
	nicotine: number;
	pg: number;
	vg: number;
	steep: number;
	volume: number;
	created: string;
	mixed: string;
	archived?: string | null;
	transaction: ITransaction;
	transactionId: string;
}

export interface ILiquidQuery extends IQuery<Prisma.LiquidWhereInput, Prisma.LiquidOrderByWithRelationInput> {
}

export interface ILiquidFetchProps {
	liquid: ILiquid;
}

export interface ILiquidFetchQuery extends ParsedUrlQuery {
	liquidId: string;
}

export interface ILiquidService extends IRepositoryService<ILiquidCreate, Liquid, ILiquid, ILiquidQuery, ILiquidFetchProps, ILiquidFetchQuery> {
}
