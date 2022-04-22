import {IMod} from "@/puff-smith/service/mod";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Mod, Prisma} from "@prisma/client";

export interface IModMarket {
	mod: IMod;
	isOwned: boolean | undefined;
}

export interface IModMarketQuery extends IQuery<Prisma.ModWhereInput, Prisma.ModOrderByWithRelationInput> {
}

export interface IModMarketService extends IRepositoryService<void, Mod, IModMarket, IModMarketQuery, void, {}> {
}
