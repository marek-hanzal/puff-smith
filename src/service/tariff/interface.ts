import {IServiceCreate} from "@/puff-smith/service";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Prisma, Tariff, Transaction} from "@prisma/client";
import {DateTime} from "next-auth/providers/kakao";
import {ParsedUrlQuery} from "querystring";

export interface ITariffCreate {
	name: string;
	description?: string;
	code?: string;
	from?: DateTime;
	to?: DateTime;
}

export interface ITariff {
	id: string;
	name: string;
	code: string;
	description?: string | null;
	from?: string | null;
	to?: string | null;
	created?: string | null;
}

export interface ITariffQuery extends IQuery<Prisma.TariffWhereInput, Prisma.TariffOrderByWithRelationInput> {
}

export interface ITariffFetchProps {
	tariff: ITariff;
}

export interface ITariffFetchQuery extends ParsedUrlQuery {
	tariffId: string;
}

export interface ITransactionOfRequest<T> {
	userId: string;
	tariff: string;
	price: string;
	fallback?: string;
	note?: string;

	callback(tariff: Tariff, transaction: Transaction): Promise<T>;
}

export interface ITariffServiceCreate extends IServiceCreate {
}

export interface ITariffService extends IRepositoryService<ITariffCreate, Tariff, ITariff, ITariffQuery, ITariffFetchProps, ITariffFetchQuery> {
	transactionOf<T>(request: ITransactionOfRequest<T>): Promise<T>;
}
