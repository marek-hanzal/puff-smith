import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, IRepositoryService, IWhereFulltext} from "@leight-core/api";
import {Mod, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IModCreate {
	name: string;
	code?: string;
	vendor: string;
	cells: string;
	cost: number;
	voltage: number;
	power: number;
}

export interface IMod {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	cells: ITag[];
	cost: number;
	voltage: number;
	power: number;
}

export type IModWhere = Prisma.ModWhereInput & IWhereFulltext;

export interface IModQuery extends IQuery<IModWhere, Prisma.ModOrderByWithRelationInput> {
}

export interface IModFetchProps {
	mod: IMod;
}

export interface IModFetchQuery extends ParsedUrlQuery {
	modId: string;
}

export interface IModServiceCreate extends IServiceCreate {
}

export interface IModService extends IRepositoryService<IModCreate, Mod, IMod, IModQuery, IModFetchProps, IModFetchQuery> {
}
