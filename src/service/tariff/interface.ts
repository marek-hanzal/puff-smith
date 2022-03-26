import {IQuery, IRepositoryService} from "@leight-core/api";
import {Prisma, Tariff} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";
import {DateTime} from "next-auth/providers/kakao";

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

export interface ITariffService extends IRepositoryService<ITariffCreate, Tariff, ITariff, ITariffQuery, ITariffFetchProps, ITariffFetchQuery> {
}
