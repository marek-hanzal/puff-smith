import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWire, IWireReference, IWithWire, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
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

export type ICoilEntity<T = void> = T extends void ? Coil : Coil & T;
export type IWithCoil<T = void> = { coil: ICoilEntity<T>; };
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

export interface ICoilSource extends ISource<ICoilCreate, ICoilEntity<IWithWire<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>>> & IWithCoilDraw>, ICoil, ICoilQuery, ICoilFetch, ICoilFetchParams> {
}
