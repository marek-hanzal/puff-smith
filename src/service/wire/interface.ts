import {IFiberEntity} from "@/puff-smith/service/fiber/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWireDrawEntity} from "@/puff-smith/service/wire/draw/interface";
import {IWireFiber} from "@/puff-smith/service/wire/fiber/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Fiber, Prisma, Wire} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IWireCreate = {
	name?: string;
	code?: string;
	cost: number;
	isTCR: boolean;
	mm?: number;
	draws?: string;
	fibers?: string;
} & IVendorReference;

export interface IWireReference {
	wireId?: string;
	wire?: string;
}

export interface IWireFiberCreate {
	count: number;
	fiber: string;
	$fiber: Fiber;
}

export interface IWireQuery extends IQuery<Prisma.WireWhereInput & IWithFulltext, Prisma.WireOrderByWithRelationInput> {
}

export type IWireEntity<T = any> = Wire & T;
export type IWithWire<T = any> = { wire: IWireEntity<T>; };
export type IWithWireDraw = { WireDraw: { draw: IWireDrawEntity }[] };
export type IWithWireFiber = { WireFiber: { fiber: IFiberEntity; }[] };

export interface IWire {
	id: string;
	name: string;
	code: string;
	cost: number;
	isTCR: boolean;
	mm: number;
	mmToRound: number;
	vendorId: string;
	vendor: IVendor;
	draws: ITag[];
	fibers: IWireFiber[];
}

export interface IWireFetchProps {
	wire: IWire;
}

export interface IWireFetchQuery extends ParsedUrlQuery {
	wireId: string;
}

export interface IWireSource extends ISource<IWireCreate, IWireEntity<IWithVendor & IWithWireDraw & IWithWireFiber>, IWire, IWireQuery> {
	fetchByReference(request: IWireReference): Promise<IWireEntity>;
}
