import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IWire, IWireReference, IWithWire} from "@/puff-smith/service/wire/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Coil, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type ICoilCreate = {
	name?: string;
	code?: string;
	size: number;
	wraps: number;
} & IWireReference & ICoilDraws;

export interface ICoilDraws {
	draws?: string;
	drawIds?: string[];
}

export interface ICoilQuery extends IQuery<Prisma.CoilWhereInput, Prisma.CoilOrderByWithRelationInput> {
}

export type ICoilEntity<T = any> = Coil & T;
export type IWithCoil<T = any> = { coil: ICoilEntity<T>; };
export type IWithCoilDraw = { CoilDraw: { draw: ITagEntity }[]; };

export interface ICoil {
	id: string;
	name: string;
	code: string;
	wireId: string;
	wire: IWire;
	draws: ITag[];
}

export interface ICoilFetch {
	coil: ICoil;
}

export interface ICoilFetchParams extends ParsedUrlQuery {
	coilId: string;
}

export interface ICoilSource extends ISource<ICoilCreate, ICoilEntity<IWithWire & IWithCoilDraw>, ICoil, ICoilQuery, ICoilFetch, ICoilFetchParams> {
}
