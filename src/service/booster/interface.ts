import {IVendor, IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Booster, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBoosterCreate {
	name: string;
	code?: string;
	vendor: string;
	cost: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
}

export type IBoosterWhere = Prisma.BoosterWhereInput & IWithFulltext;

export interface IBoosterQuery extends IQuery<IBoosterWhere, Prisma.BoosterOrderByWithRelationInput> {
}

export type IBoosterEntity<T = void> = T extends void ? Booster : Booster & T;
export type IWithBoosterEntity<T = void> = { booster: IBoosterEntity<T>; };
export type IWithNullBoosterEntity<T = void> = { booster: IBoosterEntity<T> | null; };

export interface IBooster {
	id: string;
	name: string;
	code: string;
	vendor: IVendor;
	vendorId: string;
	cost: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
}

export interface IBoosterFetchProps {
	booster: IBooster;
}

export interface IBoosterFetchQuery extends ParsedUrlQuery {
	boosterId: string;
}

export interface IBoosterSource extends ISource<IBoosterCreate, IBoosterEntity<IWithVendor>, IBooster, IBoosterQuery> {
}
