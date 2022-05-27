import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWireFiber, IWireFiberEntity} from "@/puff-smith/service/wire/fiber/interface";
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

export type IWireEntity<T = void> = T extends void ? Wire : Wire & T;
export type IWithWire<T = void> = { wire: IWireEntity<T>; };
export type IWithWireDraw = { WireDraw: { draw: ITagEntity; }[] };
export type IWithWireFiber<T = void> = { WireFiber: IWireFiberEntity<T>[] };

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

export interface IWireSource extends ISource<IWireCreate, IWireEntity<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>>>, IWire, IWireQuery> {
	fetchByReference(request: IWireReference): Promise<IWireEntity>;
}
