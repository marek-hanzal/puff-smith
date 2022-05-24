import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IMixtureInventoryEntity, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureAromaSource extends ISource<undefined, IMixtureInventoryEntity, IAroma, IMixtureInventoryQuery> {
}
