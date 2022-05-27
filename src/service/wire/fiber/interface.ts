import {IFiber, IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma, WireFiber} from "@prisma/client";

export interface IWireFiber {
	id: string;
	count: number;
	fiberId: string;
	fiber: IFiber;
}

export interface IWireFiberQuery extends IQuery<Prisma.WireFiberWhereInput & IWithFulltext, Prisma.WireFiberOrderByWithRelationInput> {
}

export type IWireFiberEntity<T = void> = T extends void ? WireFiber : WireFiber & T;

export interface IWireFiberSource extends ISource<undefined, IWireFiberEntity<IWithFiber<IWithFiberMaterial>>, IWireFiber, IWireFiberQuery> {
}
