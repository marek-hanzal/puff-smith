import {IQuery, IRepositoryService} from "@leight-core/api";
import {Mod, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";
import {IVendor} from "@/puff-smith/service/vendor";

export interface IModCreate {
	name: string;
	vendor: string;
	cells: string;
	cost: number;
	voltage: number;
	power: number;
}

export interface IMod {
	id: string;
	name: string;
	vendor: IVendor;
	cost: number;
	voltage: number;
	power: number;
}

export interface IModQuery extends IQuery<Prisma.ModWhereInput, Prisma.ModOrderByWithRelationInput> {
}

export interface IModFetchProps {
	mod: IMod;
}

export interface IModFetchQuery extends ParsedUrlQuery {
	modId: string;
}

export interface IModService extends IRepositoryService<IModCreate, Mod, IMod, IModQuery, IModFetchProps, IModFetchQuery> {
}
