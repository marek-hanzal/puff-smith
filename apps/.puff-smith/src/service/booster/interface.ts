import {ContainerClass} from "@/puff-smith/service/Container";
import {
    IQuery,
    ISource,
    IWithFulltext
}                       from "@leight-core/viv";
import {
    Booster,
    Prisma
}                       from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IBoosterEntity = Booster;
export type IWithBooster = { booster: IBoosterEntity; };

export interface IBooster extends Omit<Booster, "nicotine"> {
	nicotine: number;
}

export interface IBoosterCreate extends Omit<Booster, "id" | "hash"> {
}

export type IBoosterQuery = IQuery<Prisma.BoosterWhereInput & IWithFulltext, Prisma.BoosterOrderByWithRelationInput>;

export interface IBoosterFetch {
	booster: IBooster;
}

export interface IBoosterFetchParams extends ParsedUrlQuery {
	boosterId: string;
}

export interface IBoosterSource extends ISource<//
	ContainerClass,
	IBoosterEntity,
	IBooster,
	IBoosterQuery,
	IBoosterCreate> {
}