import {IMixtureEntity, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import {ISource} from "@leight-core/api";

export interface IMixtureJobCreate {
	code?: string;
	aromaId: string;
	boosterId?: string;
	boosterCount: number;
	baseId?: string;
	baseMl: number;
	content: number;
	volume: number;
	available: number;
	diff: number;
	nicotine: number;
	vg: number;
	pg: number;
	vgToMl: number;
	pgToMl: number;
	draws?: string[];
}

export interface IMixtureJob {
	id: string;
}

export interface IMixtureJobSource extends ISource<IMixtureJobCreate, Pick<IMixtureEntity, "id">, IMixtureJob, IMixtureQuery> {
}
