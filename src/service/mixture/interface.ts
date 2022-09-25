import {IMixtureInfo, IToMixtureAromaRequest} from "@/puff-smith/service/mixture/toMixture";
import {IQuery, ISource} from "@leight-core/api";

export interface IMixture extends IMixtureInfo {
	id: string;
}

export interface IMixtureFilter {
	aroma: IToMixtureAromaRequest;
	nicotine?: number;
	vg: number;
	pg: number;
}

export type IMixtureQuery = IQuery<IMixtureFilter, void>;

export interface IMixtureSource extends ISource
	<void,
		IMixtureInfo,
		IMixture,
		IMixtureQuery> {
}
