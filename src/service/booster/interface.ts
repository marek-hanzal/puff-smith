import {IVendor} from "@/puff-smith/service/vendor";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Booster, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBoosterCreate {
	name: string;
	vendor: string;
	cost: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
}

export interface IBoosterQuery extends IQuery<Prisma.BoosterWhereInput, Prisma.BoosterOrderByWithRelationInput> {
}

export interface IBooster {
	id: string;
	name: string;
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

export type IBoosterService = IRepositoryService<IBoosterCreate, Booster, IBooster, IBoosterQuery, IBoosterFetchProps, IBoosterFetchQuery>;
