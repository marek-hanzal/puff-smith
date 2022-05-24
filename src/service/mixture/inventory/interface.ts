import {IWithAromaEntity} from "@/puff-smith/service/aroma/interface";
import {IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixture, IWithMixtureEntity} from "@/puff-smith/service/mixture/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {MixtureInventory, Prisma} from "@prisma/client";

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

export type IMixtureInventoryEntity = MixtureInventory & IWithAromaEntity & IWithMixtureEntity & IWithNullBaseEntity & IWithNullBoosterEntity;

export interface IMixtureInventory {
	id: string;
	mixture: IMixture;
}

export interface IMixtureInventorySource extends ISource<IMixtureInventoryCreate, IMixtureInventoryEntity, IMixtureInventory, IMixtureInventoryQuery> {
}
