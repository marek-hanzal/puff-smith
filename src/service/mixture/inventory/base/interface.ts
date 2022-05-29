import {IBase, IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBaseSource extends ISource<undefined, IWithNullBaseEntity<IWithVendor>, IBase, IMixtureQuery> {
}
