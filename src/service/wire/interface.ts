import {IServiceCreate} from "@/puff-smith/service";
import {IVendorReference} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Fiber, Prisma, Wire} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IWireCreate = {
	name?: string;
	code?: string;
	isTCR: boolean;
	mm?: number;
	draws?: string;
	fibers?: string;
} & IVendorReference;

export interface IWireFiberCreate {
	count: number;
	fiber: string;
	_fiber: Fiber;
}

export interface IWireQuery extends IQuery<Prisma.WireWhereInput, Prisma.WireOrderByWithRelationInput> {
}

export interface IWire {
	id: string;
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
}
