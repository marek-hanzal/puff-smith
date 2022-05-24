import {IBoosterEntity, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {ISource} from "@leight-core/api";

export interface IBoosterNicotine {
	label: string;
	value: string;
	nicotine: number;
}

export interface IBoosterNicotineSource extends ISource<undefined, IBoosterEntity, IBoosterNicotine, IBoosterQuery> {
}
