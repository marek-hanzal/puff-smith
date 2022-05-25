import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerMarketSource} from "@/puff-smith/service/atomizer/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerMarketSource = (): IAtomizerMarketSource => {
	const atomizerSource = singletonOf(() => AtomizerSource());

	const source: IAtomizerMarketSource = Source<IAtomizerMarketSource>({
		name: "atomizer.market",
		prisma,
		map: async atomizer => atomizer ? ({
			atomizer: await atomizerSource().mapper.map(atomizer),
			isOwned: source.user.optional() ? (await source.prisma.atomizerInventory.count({
				where: {
					atomizerId: atomizer.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}) : undefined,
	});

	return source;
};
