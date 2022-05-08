import {IServiceCreate} from "@/puff-smith/service";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Fiber, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IFiberCreate = {
	code?: string;
	ga: number;
	mm: number;
	ohm: number;
} & (
	| { materialId: string; material?: never; }
	| { material: string; materialId?: never; }
	)

export interface IFiberQuery extends IQuery<Prisma.FiberWhereInput, Prisma.FiberOrderByWithRelationInput> {
}

export interface IFiber {
	id: string;
}

export interface IFiberFetchProps {
	fiber: IFiber;
}

export interface IFiberFetchQuery extends ParsedUrlQuery {
	fiberId: string;
}

export interface IFiberServiceCreate extends IServiceCreate {
}

export interface IFiberService extends IRepositoryService<IFiberCreate, Fiber, IFiber, IFiberQuery, IFiberFetchProps, IFiberFetchQuery> {
}
