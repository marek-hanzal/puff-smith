import {IServiceCreate} from "@/puff-smith/service";
import {ITag} from "@/puff-smith/service/tag/interface";
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

export interface IFiberSourceCreate extends IServiceCreate {
}

export interface IFiberSource extends ISource<IFiberCreate, Fiber, IFiber, IFiberQuery, IFiberFetchProps, IFiberFetchQuery> {
	fetchByCode(code: string): Promise<Fiber>;

	fetchByCodes(codes: string[]): Promise<Fiber[]>;
}
