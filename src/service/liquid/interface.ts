import {ILiquidCleverMix, ILiquidCleverMixInfo, ILiquidCleverMixInfoRequest, ILiquidQuickMix, ILiquidQuickMixInfo, ILiquidQuickMixInfoRequest} from "@/puff-smith/service/liquid";
import {ITransaction} from "@/puff-smith/service/transaction";
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

export interface IPgVgMl {
	pg: number;
	vg: number;
}

export interface IMixtureResult {
	volume: number;
	content?: number;
	error?: "overflow" | "underflow";
	nicotine?: number;
	ml: {
		pg: number;
		vg: number;
	},
	ratio: {
		pg: number;
		vg: number;
	};
}

export interface IAromaInfo {
	content: number;
	volume?: number | null;
	available?: number | null;
	pg: number;
	vg: number;
	ml?: IPgVgMl;
}

export interface IBaseInfo {
	volume?: number | null;
	pg: number;
	vg: number;
	ml?: IPgVgMl;
}

export interface IBoosterInfo {
	volume?: number;
	count?: number;
	pg: number;
	vg: number;
	ml?: IPgVgMl;
}

export interface ILiquidService extends IRepositoryService<ILiquidCreate, Liquid, ILiquid, ILiquidQuery, ILiquidFetchProps, ILiquidFetchQuery> {
	handleQuickMix(request: { request: ILiquidQuickMix }): Promise<ILiquid>;

	handleQuickMixInfo(request: { request: ILiquidQuickMixInfoRequest }): Promise<ILiquidQuickMixInfo>;

	handleCleverMix(request: { request: ILiquidCleverMix }): Promise<ILiquid>;

	handleCleverMixInfo(request: { request: ILiquidCleverMixInfoRequest }): Promise<ILiquidCleverMixInfo>;

	handleDelete(request: { request: ILiquidDelete }): Promise<ILiquid[]>;
}
