import {IServiceCreate} from "@/puff-smith/service";
import {IMod} from "@/puff-smith/service/mod/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Mod, Prisma} from "@prisma/client";

export interface IModMarket {
	mod: IMod;
	isOwned: boolean | undefined;
}

export interface IModMarketQuery extends IQuery<Prisma.ModWhereInput, Prisma.ModOrderByWithRelationInput> {
}

export interface IModMarketRepositoryCreate extends IServiceCreate {
}

export interface IModMarketRepository extends IRepository<void, Mod, IModMarket, IModMarketQuery, void, {}> {
}
