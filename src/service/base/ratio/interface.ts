import {IBaseEntity, IBaseQuery} from "@/puff-smith/service/base/interface";
import {ISource} from "@leight-core/api";

export interface IBaseRatio {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export interface IBaseRatioSource extends ISource<undefined, IBaseEntity, IBaseRatio, IBaseQuery> {
}
