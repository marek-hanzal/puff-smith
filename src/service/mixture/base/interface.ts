import {IBase, IWithBaseEntity} from "@/puff-smith/service/base/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBaseSource extends ISource<undefined, IWithBaseEntity, IBase, IMixtureQuery> {
}
