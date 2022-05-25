import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterMarketSource} from "@/puff-smith/service/booster/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterMarketSource = (): IBoosterMarketSource => {
	const boosterSource = singletonOf(() => BoosterSource());

	const source: IBoosterMarketSource = Source<IBoosterMarketSource>({
		name: "booster.market",
		prisma,
		map: async booster => booster ? ({
			booster: await boosterSource().mapper.map(booster),
			isOwned: source.user.optional() ? (await source.prisma.boosterInventory.count({
				where: {
					boosterId: booster.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}) : undefined,
	});

	return source;
};
