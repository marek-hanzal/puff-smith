import {IBase, IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBaseSource extends ISource<undefined, IWithNullBaseEntity<IWithVendor>, IBase, IMixtureInventoryQuery> {
}
