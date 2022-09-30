import {sha256} from "@/puff-smith/service/utils/sha256";
import {toPercent} from "@leight-core/utils";

export type IMixtureError = "LESS" | "MORE" | "FULL";

export interface IToMixtureAromaRequest {
	/**
	 * Content of an aroma (for SnV, for example, 12ml of 120ml volume).
	 */
	content: number;
	/**
	 * A volume of an aroma; for pre-made aromas should be the same as content, for others,
	 * it should be a recommended volume of the target mixture.
	 */
	volume: number;
	/**
	 * Amount (percentage) of VG in the aroma.
	 */
	vg: number;
	/**
	 * Amount (percentage) of PG in the aroma (this is quite redundant).
	 */
	pg: number;
	/**
	 * Optional presence of a nicotine in the aroma (usually in the pre-made ones).
	 */
	nicotine?: number;
}

export interface IToMixtureBaseRequest {
	/**
	 * Amount of VG in the base (percentage)
	 */
	vg: number;
	/**
	 * Amount of PG in the base (percentage)
	 */
	pg: number;
}

export interface IToMixtureBoosterRequest {
	/**
	 * Optional volume to compute splits (for example, EU makes only 10ml bottles, thus this could be used to round-up usage
	 * of boosters to whole bottles instead of just ml.
	 */
	volume?: number | null;
	/**
	 * Amount of nicotine in the booster.
	 */
	nicotine: number;
	/**
	 * Amount of VG in the booster (percentage).
	 */
	vg: number;
	/**
	 * Amount of PG in the booster (percentage).
	 */
	pg: number;
}

/**
 * Request of one exact mixture computation based on all various things it needs for life.
 */
export interface IToMixtureInfoRequest {
	/**
	 * Source aroma info
	 */
	aroma: IToMixtureAromaRequest;
	/**
	 * Information about base used to make this mixture.
	 */
	base?: IToMixtureBaseRequest;
	/**
	 * Information about booster used to make this mixture.
	 */
	booster?: IToMixtureBoosterRequest;
	/**
	 * Requested amount of nicotine for the mixture.
	 */
	nicotine?: number;
}

/**
 * Main structure with computed values of one mixture based on the given set of parameters.
 */
export interface IMixtureInfo {
	id: string;
	/**
	 * Hash based on the result.
	 */
	hash: string;
	/**
	 * Aroma
	 */
	aroma: IAromaInfo;
	/**
	 * Base part of the recipe.
	 */
	base?: IBaseInfo;
	/**
	 * Booster part of the recipe.
	 */
	booster?: IBoosterInfo;
	/**
	 * Mixture result.
	 */
	result: IMixtureResult;
}

/**
 * Interface representing content of VG/PG in ml.
 */
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
	count?: number;
	nicotine: number;
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export const toMixtureInfo = ({aroma, booster, base, nicotine}: IToMixtureInfoRequest): IMixtureInfo => {
	const id = JSON.stringify({aroma, booster, base, nicotine});
	const aromaInfo: IAromaInfo = {
		content: aroma.content,
		volume: aroma.volume,
		ratio: toPercent(aroma.content, aroma.volume),
		available: aroma.volume - aroma.content,
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
		const boosterCount = booster.volume ? Math.round(boosterBaseVolume / booster.volume) : undefined;
		const boosterVolume = booster.volume ? booster.volume * (boosterCount || 1) : boosterBaseVolume;
		const boosterInfo: IBoosterInfo = {
			volume: boosterVolume,
			count: boosterCount,
			nicotine: booster.nicotine,
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

		const info = {
			aroma: aromaInfo,
			base: aromaInfo.available > 0 && baseInfo.volume > 0 ? baseInfo : undefined,
			booster: aromaInfo.available > 0 && boosterInfo.volume > 0 ? boosterInfo : undefined,
			result: toMixtureResult({
				volume: aromaInfo.volume,
				available: aroma.volume - aroma.content,
				nicotine: boosterVolume * booster.nicotine,
				fluids: [
					aromaInfo.ml,
					baseInfo.volume > 0 ? baseInfo.ml : undefined,
					boosterInfo.ml,
				],
			})
		};

		return {
			id,
			hash: sha256(JSON.stringify(info)),
			...info,
		};
	}
	if (booster && nicotine && nicotine > 0) {
		const boosterBaseVolume = nicotine * aromaInfo.volume / booster.nicotine;
		const boosterCount = booster.volume ? Math.round(boosterBaseVolume / booster.volume) : undefined;
		const boosterVolume = booster.volume ? booster.volume * (boosterCount || 1) : boosterBaseVolume;
		const boosterInfo: IBoosterInfo = {
			volume: boosterVolume,
			count: boosterCount,
			nicotine: booster.nicotine,
			pg: booster.pg,
			vg: booster.vg,
			ml: toMl({
				volume: boosterVolume,
				pg: booster.pg,
				vg: booster.vg,
			}),
		};

		const info = {
			aroma: aromaInfo,
			booster: aromaInfo.available > 0 && boosterInfo.volume > 0 ? boosterInfo : undefined,
			result: toMixtureResult({
				volume: aromaInfo.volume,
				available: aroma.volume - aroma.content,
				fluids: [
					aromaInfo.ml,
					boosterInfo.ml,
				],
			})
		};

		return {
			id,
			hash: sha256(JSON.stringify(info)),
			...info,
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

		const info = {
			aroma: aromaInfo,
			base: aromaInfo.available > 0 && baseInfo.volume > 0 ? baseInfo : undefined,
			result: toMixtureResult({
				volume: aromaInfo.volume,
				available: aroma.volume - aroma.content,
				fluids: [
					aromaInfo.ml,
					baseInfo.ml,
				],
			})
		};

		return {
			id,
			hash: sha256(JSON.stringify(info)),
			...info,
		};
	}

	const info = {
		aroma: aromaInfo,
		result: toMixtureResult({
			volume: aromaInfo.volume,
			available: aroma.volume - aroma.content,
			nicotine: aroma.nicotine ? aroma.nicotine * aroma.volume : undefined,
			fluids: [
				aromaInfo.ml,
			],
		})
	};

	return {
		id,
		hash: sha256(JSON.stringify(info)),
		...info,
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
	error: IMixtureError | null;
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
		error: available < 0 ? "FULL" : total > volume ? "MORE" : total < volume ? "LESS" : null,
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
