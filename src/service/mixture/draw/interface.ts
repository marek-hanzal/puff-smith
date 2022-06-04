import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureDrawSource extends ISource<undefined, { draw: ITagEntity }, ITag, IMixtureQuery> {
}
