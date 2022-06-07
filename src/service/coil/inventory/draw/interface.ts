import {ICoilDrawEntity} from "@/puff-smith/service/coil/draw/interface";
import {ICoilQuery} from "@/puff-smith/service/coil/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";

export interface ICoilDrawSource extends ISource<undefined, ICoilDrawEntity, ITag, ICoilQuery> {
}
