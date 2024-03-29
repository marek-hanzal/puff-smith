import {IWithAromaSourceEntity} from "@/puff-smith/service/aroma/interface";
import {IWithNullBase} from "@/puff-smith/service/base/interface";
import {IBaseInventoryEntity} from "@/puff-smith/service/base/inventory/interface";
import {IWithNullBooster} from "@/puff-smith/service/booster/interface";
import {IBoosterInventoryEntity} from "@/puff-smith/service/booster/inventory/interface";
import {IMixture, IMixtureEntity, IMixtureQuery, IWithMixtureDraw} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureMarket {
	mixture: IMixture;
	booster: { isOwned: boolean | undefined };
	base: { isOwned: boolean | undefined };
}

export type  IMixtureMarketEntity = IMixtureEntity<IWithAromaSourceEntity & IWithNullBase<{ BaseInventory: IBaseInventoryEntity[] } & IWithVendor> & IWithNullBooster<{ BoosterInventory: IBoosterInventoryEntity[] } & IWithVendor> & IWithMixtureDraw>;

export interface IMixtureMarketSource extends ISource<undefined, IMixtureMarketEntity, IMixtureMarket, IMixtureQuery> {
}
