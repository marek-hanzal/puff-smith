import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonMarketSource} from "@/puff-smith/service/cotton/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonMarketSource = (): ICottonMarketSource => {
	const cottonSource = singletonOf(() => CottonSource());

	const source: ICottonMarketSource = Source<ICottonMarketSource>({
		name: "cotton.market",
		prisma,
		map: async cotton => cotton ? ({
			cotton: await cottonSource().mapper.map(cotton),
			isOwned: source.user.optional() ? (await source.prisma.cottonInventory.count({
				where: {
					cottonId: cotton.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}) : undefined,
	});

	return source;
};
