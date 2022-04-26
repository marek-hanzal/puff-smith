import {ITransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IILiquidCreateAroma {
	aromaId: string;
	content: number;
}

export interface IILiquidCreateBooster {
	boosterId: string;
	content: number;
}

export interface IILiquidCreateBase {
	baseId: string;
	content: number;
}

export interface ILiquidCreate {
	name: string;
	code?: string;
	volume: number;
	mixed?: Date;
	userId: string;
	nicotine?: number;
	pg: number,
	vg: number,
	steep: number,
	aromas?: IILiquidCreateAroma[];
	boosters?: IILiquidCreateBooster[];
	bases?: IILiquidCreateBase[];
}

export interface ILiquidDelete {
	ids: string[];
	userId: string;
}

export interface ILiquid {
	id: string;
	name: string;
	code: string;
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
	handleDelete(request: { request: ILiquidDelete }): Promise<ILiquid[]>;
}
