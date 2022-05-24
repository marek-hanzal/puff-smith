import {IBase} from "@/puff-smith/service/base/interface";
import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureBaseSource extends ISource<undefined, IMixtureEntity, IBase, IMixtureQuery> {
}
