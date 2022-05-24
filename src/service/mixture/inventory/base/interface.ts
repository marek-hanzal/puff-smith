import {IBase} from "@/puff-smith/service/base/interface";
import {IMixtureInventoryEntity, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBaseSource extends ISource<undefined, IMixtureInventoryEntity, IBase, IMixtureInventoryQuery> {
}
