import {IMixtureError} from "@/puff-smith/service/mixture/interface";
import {toPercent} from "@leight-core/utils";

export interface IToMixtureInfoRequest {
	aroma: {
		content: number,
		volume: number,
		vg: number,
		pg: number,
	};
	base?: {
		vg: number,
		pg: number,
	};
	booster?: {
		volume: number,
		nicotine: number,
		vg: number,
		pg: number,
	};
	nicotine?: number;
}

export interface IMixtureInfo {
	aroma: IAromaInfo;
	base?: IBaseInfo;
	booster?: IBoosterInfo;
	result: IMixtureResult;
	available: number;
}

export interface IVgPgMl {
	pg: number;
	vg: number;
}

export interface IAromaInfo {
	content: number;
	volume: number;
	available: number;
	ratio: number,
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export interface IBaseInfo {
	volume: number;
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export interface IBoosterInfo {
	volume: number;
	count: number;
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export const toMixtureInfo = ({aroma, booster, base, nicotine}: IToMixtureInfoRequest): IMixtureInfo => {
	const available = aroma.volume - aroma.content;
	const aromaInfo: IAromaInfo = {
		content: aroma.content,
		volume: aroma.volume,
		ratio: toPercent(aroma.content, aroma.volume),
		available,
		pg: aroma.pg,
		vg: aroma.vg,
		ml: toMl({
			/**
			 * looks like a bug, but it's not - toMl accepts "volume" but we're counting
			 * "content" of a liquid (not the size of a bottle).
			 */
			volume: aroma.content,
			pg: aroma.pg,
			vg: aroma.vg,
		})
	};
	/**
	 * https://www.youtube.com/watch?v=qLTgaX9gYPE
	 * https://www.youtube.com/watch?v=0nZJSkYWkvg
	 */
	if (base && booster && nicotine && nicotine > 0) {
		const boosterBaseVolume = nicotine * aromaInfo.volume / booster.nicotine;
		const boosterCount = Math.round(boosterBaseVolume / booster.volume);
		const boosterVolume = booster.volume * boosterCount;
		const boosterInfo: IBoosterInfo = {
			volume: boosterVolume,
			count: boosterCount,
			pg: booster.pg,
			vg: booster.vg,
			ml: toMl({
				volume: boosterVolume,
				pg: booster.pg,
				vg: booster.vg,
			}),
		};
		const baseInfo: IBaseInfo = {
			volume: aromaInfo.available - boosterInfo.volume,
			pg: base.pg,
			vg: base.vg,
			ml: toMl({
				volume: aromaInfo.available - boosterInfo.volume,
				pg: base.pg,
				vg: base.vg,
			}),
		};

		return {
			aroma: aromaInfo,
			base: available > 0 && baseInfo.volume > 0 ? baseInfo : undefined,
			booster: available > 0 && boosterInfo.volume > 0 ? boosterInfo : undefined,
			available,
			result: toMixtureResult({
				volume: aromaInfo.volume,
				available,
				nicotine: boosterVolume * booster.nicotine,
				fluids: [
					aromaInfo.ml,
					baseInfo.volume > 0 ? baseInfo.ml : undefined,
					boosterInfo.ml,
				],
			})
		};
	}
	if (booster && nicotine && nicotine > 0) {
		const boosterBaseVolume = nicotine * aromaInfo.volume / booster.nicotine;
		const boosterCount = Math.round(boosterBaseVolume / booster.volume);
		const boosterVolume = booster.volume * boosterCount;
		const boosterInfo: IBoosterInfo = {
			volume: boosterVolume,
			count: boosterCount,
			pg: booster.pg,
			vg: booster.vg,
			ml: toMl({
				volume: boosterVolume,
				pg: booster.pg,
				vg: booster.vg,
			}),
		};
		return {
			aroma: aromaInfo,
			booster: available > 0 && boosterInfo.volume > 0 ? boosterInfo : undefined,
			available,
			result: toMixtureResult({
				volume: aromaInfo.volume,
				available,
				fluids: [
					aromaInfo.ml,
					boosterInfo.ml,
				],
			})
		};
	}
	if (base) {
		const baseInfo: IBaseInfo = {
			volume: aromaInfo.available,
			pg: base.pg,
			vg: base.vg,
			ml: toMl({
				volume: aromaInfo.available,
				pg: base.pg,
				vg: base.vg,
			}),
		};
		return {
			aroma: aromaInfo,
			base: available > 0 && baseInfo.volume > 0 ? baseInfo : undefined,
			available,
			result: toMixtureResult({
				volume: aromaInfo.volume,
				available,
				fluids: [
					aromaInfo.ml,
					baseInfo.ml,
				],
			})
		};
	}
	return {
		aroma: aromaInfo,
		available,
		result: toMixtureResult({
			volume: aromaInfo.volume,
			available,
			fluids: [
				aromaInfo.ml,
			],
		})
	};
};

interface IToMixtureResultRequest {
	volume: number;
	available: number;
	nicotine?: number;
	fluids: (IVgPgMl | undefined)[];
}

interface IMixtureResult {
	volume: number;
	content: number;
	error?: IMixtureError;
	nicotine: number;
	nicotineToRound: number;
	ml: {
		pg: number;
		vg: number;
	};
	round: {
		pg: number;
		vg: number;
	};
	ratio: {
		pg: number;
		vg: number;
	};
	draws: string[];
}

/** VG is an input */
const drawMap: { [index in string | number]: string[] } = {
	0: [
		"x-pg",
	],
	10: [
		"x-pg",
	],
	20: [
		"x-pg",
	],
	30: [
		"x-pg",
	],
	40: [
		"rmtl",
	],
	50: [
		"rmtl",
		"mtl",
	],
	60: [
		"mtl",
		"omtl",
		"rdl",
	],
	70: [
		"rdl",
		"dl",
	],
	80: [
		"dl",
		"cch",
	],
	90: [
		"cch",
		"x-vg",
	],
	100: [
		"cch",
		"x-vg",
	],
};

const toMixtureResult = ({volume, nicotine, fluids, available}: IToMixtureResultRequest): IMixtureResult => {
	const _fluids = fluids.filter((ml): ml is IVgPgMl => !!ml);
	const vgToMl = _fluids.map(ml => ml.vg).reduce((prev, current) => prev + current, 0);
	const pgToMl = _fluids.map(ml => ml.pg).reduce((prev, current) => prev + current, 0);
	const total = pgToMl + vgToMl;
	const vgToRatio = 100 * vgToMl / volume;
	const pgToRatio = 100 * pgToMl / volume;
	const vgToRound = Math.round(vgToRatio * 0.1) / 0.1;
	const $nicotine = nicotine && nicotine > 0 ? nicotine / volume : 0;

	return {
		volume: total,
		content: volume - total,
		error: available <= 0 ? "FULL" : total > volume ? "MORE" : total < volume ? "LESS" : undefined,
		nicotine: $nicotine,
		nicotineToRound: Math.round($nicotine || 0),
		ml: {
			vg: vgToMl,
			pg: pgToMl,
		},
		round: {
			vg: vgToRound,
			pg: 100 - vgToRound,
		},
		ratio: {
			pg: pgToRatio,
			vg: vgToRatio,
		},
		draws: drawMap?.[vgToRound] || [],
	};
};

interface IToMlRequest {
	volume: number;
	pg: number;
	vg: number;
}

const toMl = ({volume, pg, vg}: IToMlRequest): IVgPgMl => ({
	pg: volume * pg / 100,
	vg: volume * vg / 100,
});
