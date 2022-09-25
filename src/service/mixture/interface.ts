import {IQuery, ISource} from "@leight-core/api";

export interface IMixture {
}

export interface IMixtureFilter {

}

export type IMixtureQuery = IQuery<IMixtureFilter, void>;


export interface IMixtureSource extends ISource
	<void,
		void,
		IMixture,
		IMixtureQuery> {
}
