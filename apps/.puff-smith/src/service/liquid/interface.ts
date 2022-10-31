import {
    IAroma,
    IWithAromaEntity
}                       from "@/puff-smith/service/aroma/interface";
import {ContainerClass} from "@/puff-smith/service/Container";
import {IMixtureInfo}   from "@/puff-smith/service/mixture/toMixture";
import {ITagEntity}     from "@/puff-smith/service/tag/interface";
import {
    IQuery,
    ISource,
    ITag,
    IWithFulltext
}                       from "@leight-core/viv";
import {
    Liquid,
    LiquidDraw,
    Prisma
}                       from "@prisma/client";

export type ILiquidEntity =
	Liquid
	& IWithAromaEntity
	& { LiquidDraw: (LiquidDraw & { draw: ITagEntity; })[] };

export interface ILiquid extends Omit<Liquid, "userId" | "nicotine" | "nicotineToRound" | "created" | "mixed"> {
	created: string;
	mixed: string;
	nicotine?: number | null;
	nicotineToRound?: number | null;
	mixture: IMixtureInfo;
	aroma: IAroma;
	draws: ITag[];
	drawIds: string[];
}

export interface IWithLiquid {
	liquid: ILiquid;
}

export interface ILiquidCreate extends Omit<Liquid, "id" | "userId" | "created" | "nicotine" | "nicotineToRound" | "vg" | "pg" | "vgToRound" | "pgToRound" | "mixtureId" | "baseAmount" | "boosterAmount"> {
	mixtureId: string;
}

export type ILiquidQuery = IQuery<Prisma.LiquidWhereInput & IWithFulltext, Prisma.LiquidOrderByWithRelationInput>;

export interface ILiquidSource extends ISource<//
	ContainerClass,
	ILiquidEntity,
	ILiquid,
	ILiquidQuery,
	ILiquidCreate> {
}
