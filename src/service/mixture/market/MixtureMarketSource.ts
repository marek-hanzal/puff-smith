import {IMixtureMarketSource} from "@/puff-smith/service/mixture/market/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureMarketSource = (): IMixtureMarketSource => {
	const mixtureSource = singletonOf(() => MixtureSource());

	const source: IMixtureMarketSource = Source<IMixtureMarketSource>({
		name: "mixture.market",
		prisma,
		map: async mixture => mixture ? ({
			mixture: await mixtureSource().mapper.map(mixture),
			booster: {
				isOwned: mixture.boosterId ? (await source.prisma.boosterInventory.count({
					where: {
						boosterId: mixture.boosterId,
						userId: source.user.required(),
					}
				})) > 0 : undefined,
			},
			base: {
				isOwned: mixture.baseId ? (await source.prisma.baseInventory.count({
					where: {
						baseId: mixture.baseId,
						userId: source.user.required(),

					}
				})) > 0 : undefined,
			},
		}) : undefined,
	});

	return source;
};
