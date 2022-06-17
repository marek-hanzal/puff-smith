import {ICotton, IWithCotton, IWithCottonDraw} from "@/puff-smith/service/cotton/interface";
import {ITransaction, IWithNullTransaction} from "@/puff-smith/service/transaction/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
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
	transaction?: ITransaction | null;
	transactionId?: string | null;
}

export interface ICottonInventoryQuery extends IQuery<Prisma.CottonInventoryWhereInput & IWithFulltext, Prisma.CottonInventoryOrderByWithRelationInput> {
}

export type ICottonInventoryEntity<T = void> = T extends void ? CottonInventory : CottonInventory & T;

export interface ICottonInventorySource extends ISource<ICottonInventoryCreate, ICottonInventoryEntity<IWithCotton<IWithVendor & IWithCottonDraw> & IWithNullTransaction>, ICottonInventory, ICottonInventoryQuery> {
}
