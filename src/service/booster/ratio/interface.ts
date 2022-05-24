import {IBoosterEntity, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {ISource} from "@leight-core/api";

export interface IBoosterRatio {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export interface IBoosterRatioSource extends ISource<undefined, IBoosterEntity, IBoosterRatio, IBoosterQuery> {
}
