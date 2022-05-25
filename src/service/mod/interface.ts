import {IWithModCell} from "@/puff-smith/service/mod/cell/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
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

export type IModWhere = Prisma.ModWhereInput & IWithFulltext;

export interface IModQuery extends IQuery<IModWhere, Prisma.ModOrderByWithRelationInput> {
}

export type IModEntity<T = any> = Mod & T;
export type IWithMod<T = any> = { mod: IModEntity<T>; };

export interface IModFetchProps {
	mod: IMod;
}

export interface IModFetchQuery extends ParsedUrlQuery {
	modId: string;
}

export interface IModSource extends ISource<IModCreate, IModEntity<IWithVendor & IWithModCell>, IMod, IModQuery> {
}
