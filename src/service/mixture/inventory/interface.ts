import {IWithAroma} from "@/puff-smith/service/aroma/interface";
import {IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IMixture, IWithMixtureEntity} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {MixtureInventory, Prisma} from "@prisma/client";

export interface IMixtureInventoryCreate {
	mixtureId: string;
	aromaId: string;
	vendorId: string;
	boosterId?: string | null;
	baseId?: string | null;
}

export interface IMixtureInventoryQuery extends IQuery<Prisma.MixtureInventoryWhereInput & IWithFulltext, Prisma.MixtureInventoryOrderByWithRelationInput> {
}

export type IMixtureInventoryEntity<T = any> = MixtureInventory & T;

export interface IMixtureInventory {
	id: string;
	mixture: IMixture;
}

export interface IMixtureInventorySource extends ISource<IMixtureInventoryCreate, IMixtureInventoryEntity<IWithVendor & IWithAroma & IWithMixtureEntity & IWithNullBaseEntity & IWithNullBoosterEntity>, IMixtureInventory, IMixtureInventoryQuery> {
}
