import {IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixture, IWithMixture, IWithMixtureDraw} from "@/puff-smith/service/mixture/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Liquid, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface ILiquidCreate {
	code?: string;
	mixed?: Date;
	mixtureId: string;
}

export interface ILiquid {
	id: string;
	code: string;
	created: string;
	mixed: string;
	transaction: ITransaction;
	transactionId: string;
	mixture: IMixture;
	mixtureId: string;
}

export interface ILiquidQuery extends IQuery<Prisma.LiquidWhereInput & IWithFulltext, Prisma.LiquidOrderByWithRelationInput> {
}

export type ILiquidEntity<T = void> = T extends void ? Liquid : Liquid & T;

export interface ILiquidFetch {
	liquid: ILiquid;
}

export interface ILiquidFetchParams extends ParsedUrlQuery {
	liquidId: string;
}

export interface ILiquidSource extends ISource<ILiquidCreate, ILiquidEntity<IWithTransaction & IWithMixture<IWithMixtureDraw & IWithNullBaseEntity<IWithVendor> & IWithNullBoosterEntity<IWithVendor> & IWithAroma<IWithVendor & IWithAromaTaste>>>, ILiquid, ILiquidQuery, ILiquidFetch, ILiquidFetchParams> {
}
