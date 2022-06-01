import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource} from "@leight-core/api";
import {BuildLiquidTasteRating, Prisma} from "@prisma/client";

export interface IBuildLiquidTasteRatingCreate {
	buildId: string;
	liquidId: string;
	tasteId: string;
	rating: number | null;
}

export interface IBuildLiquidTasteRatingGenerate {
	buildId: string;
	liquidId: string;
}

export interface IBuildLiquidTasteRating {
	id: string;
	buildId: string;
	liquidId: string;
	tasteId: string;
	taste: ITag;
	created: string;
	rating?: number | null;
}

export interface IBuildLiquidTasteRatingQuery extends IQuery<Prisma.BuildLiquidTasteRatingWhereInput, Prisma.BuildLiquidTasteRatingOrderByWithRelationInput> {
}

export type IBuildLiquidTasteRatingEntity<T = void> = T extends void ? BuildLiquidTasteRating : BuildLiquidTasteRating & T;

export type IBuildLiquidTasteRatingSourceEntity<T = void> = IBuildLiquidTasteRatingEntity<T>;

export interface IBuildLiquidTasteRatingSource extends ISource<IBuildLiquidTasteRatingCreate, IBuildLiquidTasteRatingSourceEntity<{ taste: ITagEntity }>, IBuildLiquidTasteRating, IBuildLiquidTasteRatingQuery> {
	generateFor(generate: IBuildLiquidTasteRatingGenerate): Promise<any>;
}
