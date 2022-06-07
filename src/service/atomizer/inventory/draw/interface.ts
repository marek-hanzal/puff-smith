import {IAtomizerDrawEntity} from "@/puff-smith/service/atomizer/draw/interface";
import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";

export interface IAtomizerDrawSource extends ISource<undefined, IAtomizerDrawEntity, ITag, IAtomizerQuery> {
}
