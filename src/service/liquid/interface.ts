import {ITransaction} from "@/puff-smith/service/transaction";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ILiquidCreate {
	name: string;
	volume: number;
	mixed?: Date;
	userId: string;
}

export interface ILiquidQuickMix {
	name: string;
	volume: number;
	mixed?: Date;
	userId: string;
	aromaId: string;
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

export interface ILiquidQuickMixInfoRequest {
	aromaId?: string;
	baseId?: string;
	boosterId?: string;
	nicotine?: number;
}

export interface IPgVgMl {
	pg: number;
	vg: number;
}

export interface IMixtureResult {
	volume: number;
	content?: number;
	error?: "overflow" | "underflow";
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

export interface ILiquidQuickMixInfo {
	aroma?: IAromaInfo;
	base?: IBaseInfo;
	booster?: IBoosterInfo;
	result?: IMixtureResult;
}

export interface ILiquidService extends IRepositoryService<ILiquidCreate, Liquid, ILiquid, ILiquidQuery, ILiquidFetchProps, ILiquidFetchQuery> {
	handleQuickMix(request: { request: ILiquidQuickMix }): Promise<ILiquid>;

	handleQuickMixInfo(request: { request: ILiquidQuickMixInfoRequest }): Promise<ILiquidQuickMixInfo>;
}
