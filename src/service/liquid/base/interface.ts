import {IBase, IBaseEntity, IBaseQuery} from "@/puff-smith/service/base/interface";
import {ISource} from "@leight-core/api";

export interface ILiquidBaseSource extends ISource<undefined, IBaseEntity, IBase, IBaseQuery> {
}
