import {IAroma, IWithAroma} from "@/puff-smith/service/aroma/interface";
import {IMixtureInfo} from "@/puff-smith/service/mixture/toMixture";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type ILiquidEntity = Liquid & IWithAroma;

export interface ILiquid extends Omit<Liquid, "userId" | "nicotine" | "nicotineToRound" | "created" | "mixed"> {
	created: string;
	mixed: string;
	nicotine?: number | null;
	nicotineToRound?: number | null;
	mixture: IMixtureInfo;
	aroma: IAroma;
}

export interface ILiquidCreate extends Omit<Liquid, "id" | "userId" | "created" | "nicotine" | "nicotineToRound" | "vg" | "pg" | "vgToRound" | "pgToRound" | "mixtureId" | "baseAmount" | "boosterAmount"> {
	mixtureId: string;
}

export type ILiquidQuery = IQuery<Prisma.LiquidWhereInput & IWithFulltext, Prisma.LiquidOrderByWithRelationInput>;

export interface ILiquidFetch {
	liquid: ILiquid;
}

export interface ILiquidFetchParams extends ParsedUrlQuery {
	liquidId: string;
}

export interface ILiquidSource extends ISource
	<ILiquidCreate,
		ILiquidEntity,
		ILiquid,
		ILiquidQuery,
		ILiquidFetch,
		ILiquidFetchParams> {
}
