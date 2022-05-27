import {ICellQuery, IWithCellType} from "@/puff-smith/service/cell/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";

export interface ICellTypeSource extends ISource<undefined, IWithCellType, ITag, ICellQuery> {
}
