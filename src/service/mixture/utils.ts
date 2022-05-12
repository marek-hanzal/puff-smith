import {IMixtureError} from "@/puff-smith/service/mixture/interface";
import {Aroma, Base, Booster} from "@prisma/client";

export interface IToMixtureInfoRequest {
	aroma: Aroma;
	base?: Base;
	booster: Booster;
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
	aromaId: string;
	content: number;
	volume: number;
	available: number;
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export interface IBaseInfo {
	baseId: string;
	volume: number;
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export interface IBoosterInfo {
	boosterId: string;
	volume: number;
	count: number;
	pg: number;
	vg: number;
	ml: IVgPgMl;
}

export const toMixtureInfo = async ({aroma, booster, base, nicotine}: IToMixtureInfoRequest): Promise<IMixtureInfo> => {
	const available = (aroma.volume ? aroma.volume : aroma.content) - aroma.content;
	const aromaInfo: IAromaInfo = {
		aromaId: aroma.id,
		content: aroma.content,
		volume: aroma.volume || aroma.content,
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
		const boosterBaseVolume = (aromaInfo.volume && nicotine * aromaInfo.volume || 0) / booster.nicotine || 0;
		const boosterCount = Math.round(boosterBaseVolume / booster.volume);
		const boosterVolume = booster.volume * boosterCount;
		const boosterInfo: IBoosterInfo = {
			boosterId: booster.id,
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
			baseId: base.id,
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
				volume: aromaInfo.volume || 0,
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
		const boosterBaseVolume = (aromaInfo.volume && nicotine * aromaInfo.volume || 0) / booster.nicotine || 0;
		const boosterCount = Math.round(boosterBaseVolume / booster.volume);
		const boosterVolume = booster.volume * boosterCount;
		const boosterInfo: IBoosterInfo = {
			boosterId: booster.id,
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
				volume: aromaInfo.volume || 0,
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
			baseId: base.id,
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
				volume: aromaInfo.volume || 0,
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
			volume: aromaInfo.volume || 0,
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
	ml: {
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
		"rdl",
	],
	70: [
		"omtl",
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
	const pgToMl = _fluids.map(ml => ml.pg).reduce((prev, current) => prev + current, 0);
	const vgToMl = _fluids.map(ml => ml.vg).reduce((prev, current) => prev + current, 0);
	const total = pgToMl + vgToMl;
	const pgToRatio = 100 * pgToMl / volume;
	const vgToRatio = 100 * vgToMl / volume;
	const vgToRound = Math.round(vgToRatio * 0.1) / 0.1;

	return {
		volume: total,
		content: volume - total,
		error: available <= 0 ? "FULL" : total > volume ? "MORE" : total < volume ? "LESS" : undefined,
		nicotine: nicotine && nicotine > 0 ? nicotine / volume : 0,
		ml: {
			pg: pgToMl,
			vg: vgToMl,
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
