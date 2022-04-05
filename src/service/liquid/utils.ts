import {IPgVgMl, IPgVgRatio} from "@/puff-smith/service/liquid/interface";

export interface IToMlRequest {
	volume?: number | null;
	pg: number;
	vg: number;
}

export const toMl = ({volume, pg, vg}: IToMlRequest): IPgVgMl | undefined => {
	if (!volume) {
		return undefined;
	}
	return {
		pg: volume * pg / 100,
		vg: volume * vg / 100,
	};
};

export interface IToPgVgRatioRequest {
	volume?: number | null;
	fluids: (IPgVgMl | undefined)[];
}

export const toPgVgRatio = ({volume, fluids}: IToPgVgRatioRequest): IPgVgRatio | undefined => {
	if (!volume) {
		return undefined;
	}
	const _fluids = fluids.filter((ml): ml is IPgVgMl => !!ml);
	const pg = _fluids.map(ml => ml.pg).reduce((prev, current) => prev + current, 0);
	const vg = _fluids.map(ml => ml.vg).reduce((prev, current) => prev + current, 0);
	return {
		ml: {
			pg,
			vg,
		},
		ratio: {
			pg: 100 * pg / volume,
			vg: 100 * vg / volume,
		},
	};
};
