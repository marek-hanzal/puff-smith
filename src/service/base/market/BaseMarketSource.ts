import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseMarketSource} from "@/puff-smith/service/base/market/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseMarketSource = (): IBaseMarketSource => {
	const baseSource = singletonOf(() => BaseSource());

	const source: IBaseMarketSource = Source<IBaseMarketSource>({
		name: "base.market",
		prisma,
		map: async base => base ? ({
			base: await baseSource().mapper.map(base),
			isOwned: source.user.optional() ? (await source.prisma.baseInventory.count({
				where: {
					baseId: base.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}) : undefined,
	});

	return source;
};
