import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IVendorReference} from "@/puff-smith/service/vendor/interface";
import {IWire, IWireReference} from "@/puff-smith/service/wire/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Coil, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type ICoilCreate = {
	name?: string;
	code?: string;
	size: number;
	wraps: number;
} & IVendorReference & IWireReference & ICoilDraws;

export interface ICoilDraws {
	draws?: string;
	drawIds?: string[];
}

export interface ICoilQuery extends IQuery<Prisma.CoilWhereInput, Prisma.CoilOrderByWithRelationInput> {
}

export interface ICoil {
	id: string;
	name: string;
	code: string;
	vendorId?: string | null;
	vendor?: IVendor | null;
	wireId: string;
	wire: IWire;
	draws: ITag[];
}

export interface ICoilFetchProps {
	coil: ICoil;
}

export interface ICoilFetchQuery extends ParsedUrlQuery {
	coilId: string;
}

export interface ICoilServiceCreate extends IServiceCreate {
}

export interface ICoilService extends IRepositoryService<ICoilCreate, Coil, ICoil, ICoilQuery, ICoilFetchProps, ICoilFetchQuery> {
}
