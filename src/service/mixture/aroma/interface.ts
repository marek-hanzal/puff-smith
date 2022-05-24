import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureAromaSource extends ISource<undefined, IMixtureEntity, IAroma, IMixtureQuery> {
}
