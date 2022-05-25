import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureRatio {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export interface IMixtureRatioSource extends ISource<undefined, Pick<IMixtureEntity, "vgToRound" | "pgToRound">, IMixtureRatio, IMixtureQuery> {
}
