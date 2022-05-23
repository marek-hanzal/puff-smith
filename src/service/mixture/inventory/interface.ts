import {IMixture, IWithMixtureEntity} from "@/puff-smith/service/mixture/interface";
import {IQuery, IRepository, ISource, IWithFulltext} from "@leight-core/api";
import {MixtureInventory, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IMixtureInventoryCreate {
	mixtureId: string;
	aromaId: string;
	vendorId: string;
	boosterId?: string | null;
	baseId?: string | null;
}

export type IMixtureInventoryWhere = Prisma.MixtureInventoryWhereInput & IWithFulltext;

export interface IMixtureInventoryQuery extends IQuery<IMixtureInventoryWhere, Prisma.MixtureInventoryOrderByWithRelationInput> {
}

export type IMixtureInventoryEntity = MixtureInventory & IWithMixtureEntity;

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

export interface IMixtureInventorySource extends ISource<IMixtureInventoryEntity, IMixtureInventory, IMixtureInventoryQuery> {
}

export interface IMixtureInventoryRepository extends IRepository<IMixtureInventoryCreate, IMixtureInventorySource> {
}
