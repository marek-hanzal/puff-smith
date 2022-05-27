import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Fiber, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IFiberCreate = {
	code?: string;
	ga: number;
	mm: number;
} & (
	| { materialId: string; material?: never; }
	| { material: string; materialId?: never; }
	)

export interface IFiberQuery extends IQuery<Prisma.FiberWhereInput, Prisma.FiberOrderByWithRelationInput> {
}

export type IFiberEntity<T = void> = T extends void ? Fiber : Fiber & T;
export type IWithFiber<T = void> = { fiber: IFiberEntity<T>; };
export type IWithFiberMaterial = { material: ITagEntity; };

export interface IFiber {
	id: string;
	code: string;
	ga: number;
	mm: number;
	materialId: string;
	material: ITag;
}

export interface IFiberFetchProps {
	fiber: IFiber;
}

export interface IFiberFetchQuery extends ParsedUrlQuery {
	fiberId: string;
}

export interface IFiberSource extends ISource<IFiberCreate, IFiberEntity<IWithFiberMaterial>, IFiber, IFiberQuery> {
	fetchByCode(code: string): Promise<IFiberEntity<IWithFiberMaterial>>;

	fetchByCodes(codes: string[]): Promise<IFiberEntity<IWithFiberMaterial>[]>;
}
