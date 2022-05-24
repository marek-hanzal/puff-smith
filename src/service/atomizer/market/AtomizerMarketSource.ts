import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerMarketSource} from "@/puff-smith/service/atomizer/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerMarketSource = (): IAtomizerMarketSource => {
	const atomizerSource = singletonOf(() => AtomizerSource());

	const source: IAtomizerMarketSource = Source<IAtomizerMarketSource>({
		name: "atomizer-market",
		prisma,
		map: async entity => ({
			atomizer: await atomizerSource().mapper.map(entity),
			isOwned: source.user.optional() ? (await source.prisma.atomizerInventory.count({
				where: {
					atomizerId: entity.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}),
	});

	return source;
};
