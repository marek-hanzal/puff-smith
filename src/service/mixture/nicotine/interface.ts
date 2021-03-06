import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureNicotine {
	label: string;
	value: number;
	nicotine: number;
}

export interface IMixtureNicotineSource extends ISource<undefined, Pick<IMixtureEntity, "nicotineToRound">, IMixtureNicotine, IMixtureQuery> {
}
