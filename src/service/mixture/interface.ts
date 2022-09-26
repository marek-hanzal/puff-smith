import {IMixtureInfo, IToMixtureAromaRequest, IToMixtureBaseRequest, IToMixtureBoosterRequest} from "@/puff-smith/service/mixture/toMixture";
import {IQuery, ISource} from "@leight-core/api";

export interface IMixture extends IMixtureInfo {
}

export interface IMixtureFilter {
	id?: string;
	mixture?: {
		aroma: IToMixtureAromaRequest;
		nicotine: number;
		booster?: IToMixtureBoosterRequest[];
		base?: IToMixtureBaseRequest[];
		vg?: number;
		pg?: number;
	};
}

export interface IMixtureInfoList<TInfo> {
	info: Map<string, TInfo>;
	list: string[];
}

export interface IMixtureInfoByVgPg {
	vg: number;
	pg: number;
	info: IMixture[];
}

export interface IMixtureInfoByBooster {
	vg: number;
	pg: number;
	nicotine: number;
	info: IMixture[];
}

export interface IMixtureInfoByBase {
	vg: number;
	pg: number;
	info: IMixture[];
}

export interface IMixtureInfoByNicotine {
	nicotine: number;
	info: IMixture[];
}

export interface IMixtureInfoBy {
	vgpg: IMixtureInfoList<IMixtureInfoByVgPg>;
	booster: IMixtureInfoList<IMixtureInfoByBooster>;
	base: IMixtureInfoList<IMixtureInfoByBase>;
	nicotine: IMixtureInfoList<IMixtureInfoByNicotine>;
}

export type IMixtureQuery = IQuery<IMixtureFilter, void>;

export interface IMixtureSource extends ISource
	<void,
		IMixtureInfo,
		IMixture,
		IMixtureQuery> {
}
