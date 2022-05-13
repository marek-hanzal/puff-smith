import {IServiceCreate} from "@/puff-smith/service";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {IQuery, IRepositoryService, IWhereFulltext} from "@leight-core/api";
import {MixtureInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IMixtureInventoryCreate {
	mixtureId: string;
	aromaId: string;
	vendorId: string;
	boosterId?: string | null;
	baseId?: string | null;
}

export type IMixtureInventoryWhere = Prisma.MixtureInventoryWhereInput & IWhereFulltext;

export interface IMixtureInventoryQuery extends IQuery<IMixtureInventoryWhere, Prisma.MixtureInventoryOrderByWithRelationInput> {
}

export interface IMixtureInventory {
	id: string;
	mixture: IMixture;
}

export interface IMixtureInventoryFetchProps {
	mixtureInventory: IMixtureInventory;
}

export interface IMixtureInventoryFetchQuery extends ParsedUrlQuery {
	mixtureInventoryId: string;
}

export interface IMixtureInventoryServiceCreate extends IServiceCreate {
}

export interface IMixtureInventoryService extends IRepositoryService<IMixtureInventoryCreate, MixtureInventory, IMixtureInventory, IMixtureInventoryQuery, IMixtureInventoryFetchProps, IMixtureInventoryFetchQuery> {
}
