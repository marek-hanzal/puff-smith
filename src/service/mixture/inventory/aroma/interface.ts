import {IAroma, IWithAromaSourceEntity} from "@/puff-smith/service/aroma/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureAromaSource extends ISource<undefined, IWithAromaSourceEntity, IAroma, IMixtureQuery> {
}
