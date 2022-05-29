import {ICoil, IWithCoil, IWithCoilDraw} from "@/puff-smith/service/coil/interface";
import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWithWire, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
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

export interface ICoilInventorySource extends ISource<ICoilInventoryCreate, ICoilInventoryEntity<IWithCoil<IWithWire<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>>> & IWithCoilDraw>>, ICoilInventory, ICoilInventoryQuery> {
}
