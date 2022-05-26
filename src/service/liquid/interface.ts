import {IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixture, IWithMixtureDraw, IWithMixtureEntity} from "@/puff-smith/service/mixture/interface";
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

export type ILiquidWhere = Prisma.LiquidWhereInput & IWithFulltext;

export interface ILiquidQuery extends IQuery<ILiquidWhere, Prisma.LiquidOrderByWithRelationInput> {
}

export type ILiquidEntity<T = void> = T extends void ? Liquid : Liquid & T;

export interface ILiquidFetch {
	liquid: ILiquid;
}

export interface ILiquidFetchParams extends ParsedUrlQuery {
	liquidId: string;
}

export type ILiquidSourceEntity = ILiquidEntity<IWithAroma<IWithVendor> & IWithMixtureEntity<IWithMixtureDraw & IWithNullBoosterEntity<IWithVendor> & IWithNullBaseEntity<IWithVendor> & IWithAroma<IWithVendor & IWithAromaTaste>> & IWithTransaction>;

export interface ILiquidSource extends ISource<ILiquidCreate, ILiquidSourceEntity, ILiquid, ILiquidQuery, ILiquidFetch, ILiquidFetchParams> {
}
