import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference} from "@/puff-smith/service/vendor/interface";
import {IWireFiber} from "@/puff-smith/service/wire/fiber/interface";
import {IQuery, IRepositoryService, IWhereFulltext} from "@leight-core/api";
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
	_fiber: Fiber;
}

export type IWireWhere = Prisma.WireWhereInput & IWhereFulltext;

export interface IWireQuery extends IQuery<IWireWhere, Prisma.WireOrderByWithRelationInput> {
}

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

export interface IWireServiceCreate extends IServiceCreate {
}

export interface IWireService extends IRepositoryService<IWireCreate, Wire, IWire, IWireQuery, IWireFetchProps, IWireFetchQuery> {
	fetchByReference(request: IWireReference): Promise<Wire>;
}
