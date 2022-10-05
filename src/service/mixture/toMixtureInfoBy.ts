import {IMixtureInfoBy} from "@/puff-smith/service/mixture/interface";
import {IMixtureInfo}   from "@/puff-smith/service/mixture/toMixture";

export const toMixtureInfoBy = (infoList: IMixtureInfo[]): IMixtureInfoBy => {
	const result: IMixtureInfoBy = {
		vgpg:    {
			info: new Map(),
			list: [],
		},
		booster: {
			info: new Map(),
			list: [],
		},
		base:    {
			info: new Map(),
			list: [],
		},
		nicotine: {
			info: new Map(),
			list: [],
		},
	};
	infoList.sort((a, b) => {
		return a.result.round.vg - b.result.round.vg;
	}).forEach(info => {
		const key = `${info.result.round.vg}/${info.result.round.pg}`;
		result.vgpg.info.set(key, result.vgpg.info.get(key) || {
			vg:   info.result.round.vg,
			pg:   info.result.round.pg,
			info: [],
		});
		result.vgpg.info.get(key)?.info.push(info);
	});
	infoList.sort((a, b) => {
		return (b.booster?.vg || 0) - (a.booster?.vg || 0);
	}).forEach(info => {
		if (info.booster) {
			const key = `${info.booster.vg}/${info.booster.pg}`;
			result.booster.info.set(key, result.booster.info.get(key) || {
				vg:       info.booster.vg,
				pg:       info.booster.pg,
				nicotine: info.booster?.nicotine,
				info:     [],
			});
			result.booster.info.get(key)?.info.push(info);
		}
	});
	infoList.sort((a, b) => {
		return (b.base?.vg || 0) - (a.base?.vg || 0);
	}).forEach(info => {
		if (info.base) {
			const key = `${info.base.vg}/${info.base.pg}`;
			result.base.info.set(key, result.base.info.get(key) || {
				vg:   info.base.vg,
				pg:   info.base.pg,
				info: [],
			});
			result.base.info.get(key)?.info.push(info);
		}
	});
	infoList.sort((a, b) => {
		return (a.result.nicotine || 0) - (b.result.nicotine || 0);
	}).forEach(info => {
		if (info.result.nicotine) {
			const key = `${info.result.nicotine}`;
			result.nicotine.info.set(key, result.nicotine.info.get(key) || {
				nicotine: info.result.nicotine,
				info:     [],
			});
			result.nicotine.info.get(key)?.info.push(info);
		}
	});

	result.vgpg.list     = [...result.vgpg.info.keys()];
	result.booster.list  = [...result.booster.info.keys()];
	result.base.list     = [...result.base.info.keys()];
	result.nicotine.list = [...result.nicotine.info.keys()];

	return result;
};
