import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IMixtureSource}  from "@/puff-smith/service/mixture/interface";
import {
	IMixtureInfo,
	IToMixtureBaseRequest,
	IToMixtureBoosterRequest,
	toMixtureInfo
}                        from "@/puff-smith/service/mixture/toMixture";
import {SourceInfer}     from "@leight-core/api";
import {uniqueOf}        from "@leight-core/utils";
import LRUCache          from "lru-cache";

const mixtureCache: LRUCache<string, SourceInfer.Entity<IMixtureSource>[]> = new LRUCache<string, SourceInfer.Entity<IMixtureSource>[]>({
	max: 2048,
});

export class MixtureSourceClass extends ContainerSource<IMixtureSource> implements IMixtureSource {
	constructor() {
		super("mixture");
		this.cache = {
			query: mixtureCache,
		};
	}

	async toItem(mixture: SourceInfer.Entity<IMixtureSource>): Promise<SourceInfer.Item<IMixtureSource>> {
		return mixture;
	}

	async $get(id: string): Promise<SourceInfer.Entity<IMixtureSource>> {
		return toMixtureInfo(JSON.parse(id));
	}

	async $query(query: SourceInfer.Query<IMixtureSource>): Promise<SourceInfer.Entity<IMixtureSource>[]> {
		if (!query.filter) {
			return [];
		}
		if (query.filter.id) {
			return [await this.get(query.filter.id)];
		}
		if (!query.filter.mixture) {
			return [];
		}
		const {page, size}                                                    = query;
		const {aroma, nicotine, nicotineTolerance = 0, vg, pg, booster, base} = query.filter.mixture;
		const isFilled                                                        = aroma.volume === aroma.content;
		const baseList: IToMixtureBaseRequest[]                               = isFilled ? [] : (base || []);
		const boosterList: IToMixtureBoosterRequest[]                         = isFilled ? [] : (booster || []);
		if (!isFilled && !base) {
			for (let vg = 0; vg <= 100; vg += 10) {
				baseList.push({
					vg,
					pg: 100 - vg,
				});
			}
		}
		if (!isFilled && nicotine && nicotine > 0 && !booster) {
			for (let $nicotine = 0; $nicotine <= 250; $nicotine++) {
				for (let vg = 0; vg <= 100; vg += 10) {
					boosterList.push({
						vg,
						pg:       100 - vg,
						nicotine: $nicotine,
					});
				}
			}
		}

		const info: IMixtureInfo[] = [];

		function resolveInfo(info: IMixtureInfo): boolean {
			const vgPgThreshold = 6;
			if (info.result.error) {
				return false;
			}
			if (nicotine && (info.result.nicotineToRound < (nicotine - nicotineTolerance) || info.result.nicotineToRound > (nicotine + nicotineTolerance))) {
				return false;
			}
			if (vg && (info.result.ratio.vg < (vg - vgPgThreshold) || info.result.ratio.vg > (vg + vgPgThreshold))) {
				return false;
			}
			return !(pg && (info.result.ratio.pg < (pg - vgPgThreshold) || info.result.ratio.pg > (pg + vgPgThreshold)));
		}

		!nicotine && baseList.forEach(base => {
			const $info = toMixtureInfo({
				aroma,
				base,
			});
			resolveInfo($info) && info.push($info);
		});
		if (nicotine) {
			for (let $nicotine = Math.max(0, nicotine - nicotineTolerance); $nicotine <= (nicotine + nicotineTolerance); $nicotine++) {
				boosterList.forEach(booster => {
					const $info = toMixtureInfo({
						aroma,
						booster,
						nicotine: $nicotine,
					});
					resolveInfo($info) && info.push($info);
				});
				baseList.forEach(base => boosterList.forEach(booster => {
					const $info = toMixtureInfo({
						aroma,
						base,
						booster,
						nicotine: $nicotine,
					});
					resolveInfo($info) && info.push($info);
				}));
			}
		}
		/**
		 * Last one just an aroma (for pre-made aromas)
		 */
		if (isFilled) {
			const $info = toMixtureInfo({
				aroma,
			});
			resolveInfo($info) && info.push($info);
		}
		return page !== undefined && size !== undefined ? uniqueOf(info, "hash").sort((a, b) => {
			return b.result.nicotineToRound - a.result.nicotineToRound || b.result.ratio.vg - a.result.ratio.vg;
		}).slice(page * size, (page * size) + size) : info;
	}

	async $count({filter}: SourceInfer.Query<IMixtureSource>): Promise<number> {
		return (await this.query({filter})).length;
	}
}

export const MixtureSource = () => new MixtureSourceClass();
