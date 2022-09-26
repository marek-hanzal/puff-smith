import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {IMixtureInfo, IToMixtureBaseRequest, IToMixtureBoosterRequest, toMixtureInfo} from "@/puff-smith/service/mixture/toMixture";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ISourceEntity, ISourceItem, ISourceQuery} from "@leight-core/api";

export const MixtureSource = () => new MixtureSourceClass();

export class MixtureSourceClass extends ContainerSource<IMixtureSource> implements IMixtureSource {
	constructor() {
		super("mixture", prisma);
	}

	async map(mixture: ISourceEntity<IMixtureSource>): Promise<ISourceItem<IMixtureSource>> {
		return mixture;
	}

	async $get(id: string): Promise<ISourceEntity<IMixtureSource>> {
		return toMixtureInfo(JSON.parse(id));
	}

	async $query({filter}: ISourceQuery<IMixtureSource>): Promise<ISourceEntity<IMixtureSource>[]> {
		if (!filter || !filter.mixture) {
			return [];
		}
		const {aroma, nicotine, vg, pg, booster, base} = filter.mixture;

		const baseList: IToMixtureBaseRequest[] = base || [];
		const boosterList: IToMixtureBoosterRequest[] = booster || [];
		if (!base) {
			for (let vg = 0; vg <= 100; vg += 10) {
				baseList.push({
					vg,
					pg: 100 - vg,
				});
			}
		}
		if (nicotine && nicotine > 0 && !booster) {
			for (let $nicotine = 0; $nicotine <= 250; $nicotine++) {
				for (let vg = 0; vg <= 100; vg += 10) {
					boosterList.push({
						vg,
						pg: 100 - vg,
						nicotine: $nicotine,
					});
				}
			}
		}

		const info: IMixtureInfo[] = [];

		function resolveInfo(info: IMixtureInfo): boolean {
			if (info.result.error) {
				return false;
			}
			if (nicotine && (info.result.nicotineToRound < nicotine || info.result.nicotineToRound > nicotine)) {
				return false;
			}
			if (vg && (info.result.round.vg < vg || info.result.round.vg > vg)) {
				return false;
			}
			return !(pg && (info.result.round.pg < pg || info.result.round.pg > pg));
		}

		!nicotine && baseList.forEach(base => {
			const $info = toMixtureInfo({
				aroma,
				base,
			});
			resolveInfo($info) && info.push($info);
		});
		nicotine && boosterList.forEach(booster => {
			const $info = toMixtureInfo({
				aroma,
				booster,
				nicotine,
			});
			resolveInfo($info) && info.push($info);
		});
		nicotine && baseList.forEach(base => boosterList.forEach(booster => {
			const $info = toMixtureInfo({
				aroma,
				base,
				booster,
				nicotine,
			});
			resolveInfo($info) && info.push($info);
		}));

		console.log("Base", baseList);
		console.log("Booster", boosterList);
		console.log("Result", info);

		return info;
	}

	async $count(query: ISourceQuery<IMixtureSource>): Promise<number> {
		return -1;
	}
}
