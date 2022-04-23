import {ILiquidQuickMixInfo} from "@/puff-smith/service/liquid";

export interface ILiquidCleverMix {
	name?: string;
	userId: string;
	aromaId: string;
	boosterId?: string;
	baseId?: string;
	nicotine?: number;
	mixed?: Date;
}

export interface ILiquidCleverMixInfoRequest {
	aromaId?: string;
	nicotine?: number;
}

export interface ILiquidCleverMixInfo {
	best?: ILiquidQuickMixInfo;
	acceptable?: ILiquidQuickMixInfo;
	poor?: ILiquidQuickMixInfo;
}