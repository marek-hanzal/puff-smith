import {ICotton, IWithCottonEntity} from "@/puff-smith/service/cotton/interface";
import {ITransaction, IWithTransaction} from "@/puff-smith/service/transaction/interface";
import {IQuery, ISource} from "@leight-core/api";
import {CottonInventory, Prisma} from "@prisma/client";

export interface ICottonInventoryCreate {
	cottonId: string;
	code?: string;
}

export interface ICottonInventory {
	id: string;
	code: string;
	cotton: ICotton;
	cottonId: string;
	transaction: ITransaction;
	transactionId: string;
}

export interface ICottonInventoryQuery extends IQuery<Prisma.CottonInventoryWhereInput, Prisma.CottonInventoryOrderByWithRelationInput> {
}

export type ICottonInventoryEntity = CottonInventory & IWithCottonEntity & IWithTransaction;

export interface ICottonInventorySource extends ISource<ICottonInventoryCreate, ICottonInventoryEntity, ICottonInventory, ICottonInventoryQuery> {
}
