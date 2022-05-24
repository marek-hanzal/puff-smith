import {ICellEntity, ICellQuery} from "@/puff-smith/service/cell/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";

export interface ICellTypeSource extends ISource<undefined, ICellEntity, ITag, ICellQuery> {
}
