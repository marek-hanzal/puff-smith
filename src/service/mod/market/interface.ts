import {IServiceCreate} from "@/puff-smith/service";
import {IMod} from "@/puff-smith/service/mod/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Mod, Prisma} from "@prisma/client";

export interface IModMarket {
	mod: IMod;
	isOwned: boolean | undefined;
}

export interface IModMarketQuery extends IQuery<Prisma.ModWhereInput, Prisma.ModOrderByWithRelationInput> {
}

export interface IModMarketSourceCreate extends IServiceCreate {
}

export interface IModMarketSource extends ISource<void, Mod, IModMarket, IModMarketQuery, void, {}> {
}
