import {ICoil, IWithCoil} from "@/puff-smith/service/coil/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {CoilInventory, Prisma} from "@prisma/client";

export interface ICoilInventoryCreate {
	coilId: string;
}

export interface ICoilInventory {
	id: string;
	name: string;
	coil: ICoil;
	coilId: string;
}

export interface ICoilInventoryQuery extends IQuery<Prisma.CoilInventoryWhereInput & IWithFulltext, Prisma.CoilInventoryOrderByWithRelationInput> {
}

export type ICoilInventoryEntity<T = void> = T extends void ? CoilInventory : CoilInventory & T;
export type IWithCoilInventory<T = void> = { CoilInventory: ICoilInventoryEntity<T>[]; };

export interface ICoilInventorySource extends ISource<ICoilInventoryCreate, ICoilInventoryEntity<IWithCoil>, ICoilInventory, ICoilInventoryQuery> {
}
