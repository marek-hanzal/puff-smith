import {ContainerClass} from "@/puff-smith/service/Container";
import {
	IQuery,
	ISource,
	IWithFulltext
}                       from "@leight-core/api";
import {
	Base,
	Prisma
}                       from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IBaseEntity = Base;
export type IWithBase = { base: IBaseEntity; };

export interface IBase extends Omit<Base, "nicotine"> {
	nicotine: number | null;
}

export interface IBaseCreate extends Omit<Base, "id" | "hash"> {
}

export type IBaseQuery = IQuery<Prisma.BaseWhereInput & IWithFulltext, Prisma.BaseOrderByWithRelationInput>;

export interface IBaseFetch {
	base: IBase;
}

export interface IBaseFetchParams extends ParsedUrlQuery {
	baseId: string;
}

export interface IBaseSource extends ISource
	<ContainerClass,
		IBaseEntity,
		IBase,
		IBaseQuery,
		IBaseCreate> {
}
