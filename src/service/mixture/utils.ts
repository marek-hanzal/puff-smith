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
	const aromaInfo: IAromaInfo = {
		aromaId: aroma.id,
		content: aroma.content.toNumber(),
		volume: aroma.volume?.toNumber() || aroma.content.toNumber(),
		available: aroma.volume && (aroma.volume.toNumber() - aroma.content.toNumber()) || aroma.content.toNumber(),
		pg: aroma.pg.toNumber(),
		vg: aroma.vg.toNumber(),
		ml: toMl({
			/**
			 * looks like a bug, but it's not - toMl accepts "volume" but we're counting
			 * "content" of a liquid (not the size of a bottle).
			 */
			volume: aroma.content.toNumber(),
			pg: aroma.pg.toNumber(),
			vg: aroma.vg.toNumber(),
		})
	};
	/**
	 * https://www.youtube.com/watch?v=qLTgaX9gYPE
	 * https://www.youtube.com/watch?v=0nZJSkYWkvg
	 */
	if (base && booster && nicotine && nicotine > 0) {
		const boosterBaseVolume = (aromaInfo.volume && nicotine * aromaInfo.volume || 0) / booster.nicotine.toNumber() || 0;
		const boosterCount = Math.round(boosterBaseVolume / booster.volume.toNumber());
		const boosterVolume = booster.volume.toNumber() * boosterCount;
		const boosterInfo: IBoosterInfo = {
			boosterId: booster.id,
			volume: boosterVolume,
			count: boosterCount,
			pg: booster.pg.toNumber(),
			vg: booster.vg.toNumber(),
			ml: toMl({
				volume: boosterVolume,
				pg: booster.pg.toNumber(),
				vg: booster.vg.toNumber(),
			}),
		};
		const baseInfo: IBaseInfo = {
			baseId: base.id,
			volume: aromaInfo.available - boosterInfo.volume,
			pg: base.pg.toNumber(),
			vg: base.vg.toNumber(),
			ml: toMl({
				volume: aromaInfo.available - boosterInfo.volume,
				pg: base.pg.toNumber(),
				vg: base.vg.toNumber(),
			}),
		};

		return {
			aroma: aromaInfo,
			base: baseInfo.volume > 0 ? baseInfo : undefined,
			booster: boosterInfo.volume > 0 ? boosterInfo : undefined,
			result: toMixtureResult({
				volume: aromaInfo.volume || 0,
				nicotine: boosterVolume * booster.nicotine.toNumber(),
				fluids: [
					aromaInfo.ml,
					baseInfo.volume > 0 ? baseInfo.ml : undefined,
					boosterInfo.ml,
				],
			})
		};
	}
	if (booster && nicotine && nicotine > 0) {
		const boosterBaseVolume = (aromaInfo.volume && nicotine * aromaInfo.volume || 0) / booster.nicotine.toNumber() || 0;
		const boosterCount = Math.round(boosterBaseVolume / booster.volume.toNumber());
		const boosterVolume = booster.volume.toNumber() * boosterCount;
		const boosterInfo: IBoosterInfo = {
			boosterId: booster.id,
			volume: boosterVolume,
			count: boosterCount,
			pg: booster.pg.toNumber(),
			vg: booster.vg.toNumber(),
			ml: toMl({
				volume: boosterVolume,
				pg: booster.pg.toNumber(),
				vg: booster.vg.toNumber(),
			}),
		};
		return {
			aroma: aromaInfo,
			booster: boosterInfo.volume > 0 ? boosterInfo : undefined,
			result: toMixtureResult({
				volume: aromaInfo.volume || 0,
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
			pg: base.pg.toNumber(),
			vg: base.vg.toNumber(),
			ml: toMl({
				volume: aromaInfo.available,
				pg: base.pg.toNumber(),
				vg: base.vg.toNumber(),
			}),
		};
		return {
			aroma: aromaInfo,
			base: baseInfo.volume > 0 ? baseInfo : undefined,
			result: toMixtureResult({
				volume: aromaInfo.volume || 0,
				fluids: [
					aromaInfo.ml,
					baseInfo.ml,
				],
			})
		};
	}
	return {
		aroma: aromaInfo,
		result: toMixtureResult({
			volume: aromaInfo.volume || 0,
			fluids: [
				aromaInfo.ml,
			],
		})
	};
};

interface IToMixtureResultRequest {
	volume: number;
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
	},
	ratio: {
		pg: number;
		vg: number;
	};
}

const toMixtureResult = ({volume, nicotine, fluids}: IToMixtureResultRequest): IMixtureResult => {
	const _fluids = fluids.filter((ml): ml is IVgPgMl => !!ml);
	const pg = _fluids.map(ml => ml.pg).reduce((prev, current) => prev + current, 0);
	const vg = _fluids.map(ml => ml.vg).reduce((prev, current) => prev + current, 0);
	const total = pg + vg;
	return {
		volume: total,
		content: volume - total,
		error: total > volume ? "MORE" : total < volume ? "LESS" : undefined,
		nicotine: nicotine && nicotine > 0 ? nicotine / volume : 0,
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

interface IToMlRequest {
	volume: number;
	pg: number;
	vg: number;
}

const toMl = ({volume, pg, vg}: IToMlRequest): IVgPgMl => ({
	pg: volume * pg / 100,
	vg: volume * vg / 100,
});
