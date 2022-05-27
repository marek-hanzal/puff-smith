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

export interface IModQuery extends IQuery<Prisma.ModWhereInput & IWithFulltext, Prisma.ModOrderByWithRelationInput> {
}

export type IModEntity<T = void> = T extends void ? Mod : Mod & T;
export type IWithMod<T = void> = { mod: IModEntity<T>; };

export interface IModFetch {
	mod: IMod;
}

export interface IModFetchParams extends ParsedUrlQuery {
	modId: string;
}

export interface IModSource extends ISource<IModCreate, IModEntity<IWithVendor & IWithModCell>, IMod, IModQuery, IModFetch, IModFetchParams> {
}
