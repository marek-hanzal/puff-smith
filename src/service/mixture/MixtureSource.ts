import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureSource = (): IMixtureSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const aromaSource = singletonOf(() => AromaSource().ofSource(source));
	const boosterSource = singletonOf(() => BoosterSource().ofSource(source));
	const baseSource = singletonOf(() => BaseSource().ofSource(source));

	const source: IMixtureSource = Source<IMixtureSource>({
		name: "mixture",
		prisma,
		map: async mixture => ({
			...mixture,
			volume: mixture.aroma.volume,
			aroma: await aromaSource().map(mixture.aroma),
			booster: await boosterSource().mapNull(mixture.booster),
			base: await baseSource().mapNull(mixture.base),
			draws: await tagSource().list(Promise.resolve(mixture.MixtureDraw.map(({draw}) => draw))),
		}),
	});

	return source;
};
