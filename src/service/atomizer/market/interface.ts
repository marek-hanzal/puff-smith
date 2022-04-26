import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Atomizer, Prisma} from "@prisma/client";

export interface IAtomizerMarket {
	atomizer: IAtomizer;
	isOwned: boolean | undefined;
}

export interface IAtomizerMarketQuery extends IQuery<Prisma.AtomizerWhereInput, Prisma.AtomizerOrderByWithRelationInput> {
}

export interface IAtomizerMarketService extends IRepositoryService<void, Atomizer, IAtomizerMarket, IAtomizerMarketQuery, void, {}> {
}
