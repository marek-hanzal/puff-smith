import {IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IBaseInventoryEntity} from "@/puff-smith/service/base/inventory/interface";
import {IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {IBoosterInventoryEntity} from "@/puff-smith/service/booster/inventory/interface";
import {IMixture, IMixtureEntity, IMixtureQuery, IWithMixtureDraw} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureMarket {
	mixture: IMixture;
	booster: { isOwned: boolean | undefined };
	base: { isOwned: boolean | undefined };
}

export type  IMixtureMarketEntity = IMixtureEntity<IWithAroma<IWithAromaTaste & IWithVendor> & IWithNullBaseEntity<{ BaseInventory: IBaseInventoryEntity[] }> & IWithNullBoosterEntity<{ BoosterInventory: IBoosterInventoryEntity[] }> & IWithMixtureDraw>;

export interface IMixtureMarketSource extends ISource<undefined, IMixtureMarketEntity, IMixtureMarket, IMixtureQuery> {
}
