import {IBuildLiquidRating, IBuildLiquidRatingEntity} from "@/puff-smith/service/build/liquid/rating/interface";
import {ILiquid, ILiquidSourceEntity} from "@/puff-smith/service/liquid/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma} from "@prisma/client";

export type IBuildLiquid = ILiquid & {
	rating?: IBuildLiquidRating;
};

export interface IBuildLiquidQuery extends IQuery<Prisma.LiquidWhereInput & IWithFulltext, Prisma.LiquidOrderByWithRelationInput> {
}

export interface IBuildLiquidSource extends ISource<undefined, ILiquidSourceEntity<{ BuildLiquidRating: IBuildLiquidRatingEntity[] }>, IBuildLiquid, IBuildLiquidQuery> {
}
