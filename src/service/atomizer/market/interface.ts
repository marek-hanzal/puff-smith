import {IServiceCreate} from "@/puff-smith/service";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Atomizer, Prisma} from "@prisma/client";

export interface IAtomizerMarket {
	atomizer: IAtomizer;
	isOwned: boolean | undefined;
}

export interface IAtomizerMarketQuery extends IQuery<Prisma.AtomizerWhereInput, Prisma.AtomizerOrderByWithRelationInput> {
}

export interface IAtomizerMarketServiceCreate extends IServiceCreate {
}

export interface IAtomizerMarketRepository extends IRepository<void, Atomizer, IAtomizerMarket, IAtomizerMarketQuery, void, {}> {
}
