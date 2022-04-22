import {IAromaInfo, IBaseInfo, IBoosterInfo, IMixtureResult} from "@/puff-smith/service/liquid";

export interface ILiquidQuickMix {
	name?: string;
	userId: string;
	aromaId: string;
	boosterId?: string;
	baseId?: string;
	nicotine?: number;
	mixed?: Date;
}

export interface ILiquidQuickMixInfoRequest {
	aromaId?: string;
	baseId?: string;
	boosterId?: string;
	nicotine?: number;
}

export interface ILiquidQuickMixInfo {
	aroma?: IAromaInfo;
	base?: IBaseInfo;
	booster?: IBoosterInfo;
	result?: IMixtureResult;
}
