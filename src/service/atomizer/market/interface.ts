import {IServiceCreate} from "@/puff-smith/service";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Atomizer, Prisma} from "@prisma/client";

export interface IAtomizerMarket {
	atomizer: IAtomizer;
	isOwned: boolean | undefined;
}

export interface IAtomizerMarketQuery extends IQuery<Prisma.AtomizerWhereInput, Prisma.AtomizerOrderByWithRelationInput> {
}

export interface IAtomizerMarketSourceCreate extends IServiceCreate {
}

export interface IAtomizerMarketSource extends ISource<void, Atomizer, IAtomizerMarket, IAtomizerMarketQuery, void, {}> {
}
