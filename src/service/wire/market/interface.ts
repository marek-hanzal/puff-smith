import {IServiceCreate} from "@/puff-smith/service";
import {IWire} from "@/puff-smith/service/wire/interface";
import {IQuery, IRepository} from "@leight-core/api";
import {Prisma, Wire} from "@prisma/client";

export interface IWireMarket {
	wire: IWire;
	isOwned: boolean | undefined;
}

export interface IWireMarketQuery extends IQuery<Prisma.WireWhereInput, Prisma.WireOrderByWithRelationInput> {
}

export interface IWireMarketRepositoryCreate extends IServiceCreate {
}

export interface IWireMarketRepository extends IRepository<void, Wire, IWireMarket, IWireMarketQuery, void, {}> {
}
