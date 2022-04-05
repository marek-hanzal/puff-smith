import {ILiquidQuickMixInfo, IPgVgMl, IPgVgRatio} from "@/puff-smith/service/liquid/interface";
import {Aroma, Base, Booster} from "@prisma/client";

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

export interface IToLiquidQuickMixInfoRequest {
	aroma?: Aroma;
	base?: Base;
	booster?: Booster;
	nicotine?: number;
}

export const toLiquidQuickMixInfo = ({aroma, booster, base, nicotine}: IToLiquidQuickMixInfoRequest): ILiquidQuickMixInfo => {
	if (!aroma) {
		return {};
	}
	const aromaInfo = {
		content: aroma.content.toNumber(),
		volume: aroma.volume?.toNumber(),
		available: aroma.volume && (aroma.volume.toNumber() - aroma.content.toNumber()),
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
	if (aroma && base && booster && nicotine) {
		return {};
	}
	if (aroma && base) {
		const baseInfo = {
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
			base: baseInfo,
			pgvg: toPgVgRatio({
				volume: aromaInfo.volume,
				fluids: [
					aromaInfo.ml,
					baseInfo.ml,
				],
			})
		};
	}

	return {};
};
