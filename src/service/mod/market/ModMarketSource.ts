import {IModMarketSource} from "@/puff-smith/service/mod/market/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModMarketSource = (): IModMarketSource => {
	const modSource = singletonOf(() => ModSource());

	const source: IModMarketSource = Source<IModMarketSource>({
		name: "mod.market",
		prisma,
		map: async mod => mod ? ({
			mod: await modSource().mapper.map(mod),
			isOwned: source.user.optional() ? (await source.prisma.modInventory.count({
				where: {
					modId: mod.id,
					userId: source.user.required(),
				}
			})) > 0 : undefined,
		}) : undefined,
	});

	return source;
};
