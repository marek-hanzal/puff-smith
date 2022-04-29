import {IServiceCreate} from "@/puff-smith/service";
import {ITariff} from "@/puff-smith/service/tariff/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Price, Prisma} from "@prisma/client";
import {DateTime} from "next-auth/providers/kakao";
import {ParsedUrlQuery} from "querystring";

export interface IPriceCreate {
	name: string;
	price: number;
	tariff: string;
	from?: DateTime;
	to?: DateTime;
}

export interface IPrice {
	id: string;
	name: string;
	price: number;
	tariffId: string;
	tariff: ITariff;
	from?: string | null;
	to?: string | null;
	created?: string | null;
}

export interface IPriceQuery extends IQuery<Prisma.PriceWhereInput, Prisma.PriceOrderByWithRelationInput> {
}

export interface IPriceFetchProps {
	price: IPrice;
}

export interface IPriceFetchQuery extends ParsedUrlQuery {
	priceId: string;
}

export interface IPriceServiceCreate extends IServiceCreate {
}

export interface IPriceService extends IRepositoryService<IPriceCreate, Price, IPrice, IPriceQuery, IPriceFetchProps, IPriceFetchQuery> {
	priceOf(tariff: string, price: string): Promise<Price>;

	amountOf(tariff: string, price: string, fallback: number): Promise<number>;
}
