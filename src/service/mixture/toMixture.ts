import {toPercent} from "@leight-core/utils";

export type IMixtureError = "LESS" | "MORE" | "FULL";

/**
 * Request of one exact mixture computation based on all various things it needs for life.
 */
export interface IToMixtureInfoRequest {
	/**
	 * Source aroma info
	 */
	aroma: {
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
	};
	/**
	 * Information about base used to make this mixture.
	 */
	base?: {
		/**
		 * Amount of VG in the base (percentage)
		 */
		vg: number;
		/**
		 * Amount of PG in the base (percentage)
		 */
		pg: number;
	};
	/**
	 * Information about booster used to make this mixture.
	 */
	booster?: {
		/**
		 * Optional volume to compute splits (for example, EU makes only 10ml bottles, thus this could be used to round-up usage
		 * of boosters to whole bottles instead of just ml.
		 */
		volume?: number;
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
	};
	/**
	 * Requested amount of nicotine for the mixture.
	 */
	nicotine?: number;
}

/**
 * Main structure with computed values of one mixture based on the given set of parameters.
 */
export interface IMixtureInfo {
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
	available: number;
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
