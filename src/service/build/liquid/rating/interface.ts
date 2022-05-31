import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {BuildLiquidRating, Prisma} from "@prisma/client";

export interface IBuildLiquidRatingCreate {
	buildId: string;
	liquidId: string;
	rating: number | null;
}

export interface IBuildLiquidRating {
	id: string;
	buildId: string;
	liquidId: string;
	created: string;
	rating?: number | null;
}

export interface IBuildLiquidRatingQuery extends IQuery<Prisma.BuildLiquidRatingWhereInput & IWithFulltext, Prisma.BuildLiquidRatingOrderByWithRelationInput> {
}

export type IBuildLiquidRatingEntity<T = void> = T extends void ? BuildLiquidRating : BuildLiquidRating & T;

export type IBuildLiquidRatingSourceEntity = IBuildLiquidRatingEntity;

export interface IBuildLiquidRatingSource extends ISource<IBuildLiquidRatingCreate, IBuildLiquidRatingSourceEntity, IBuildLiquidRating, IBuildLiquidRatingQuery> {
}
