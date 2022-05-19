import {defaults} from "@/puff-smith/service";
import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", ILiquidQuery, IBooster>(async ({request: {filter}, toUserId}) => itemsOf(prisma.liquid.findMany({
	distinct: ["boosterId"],
	where: {
		userId: toUserId(),
		NOT: {
			boosterId: null,
		},
		booster: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
			vendor: {
				name: {
					contains: filter?.fulltext,
					mode: "insensitive",
				},
			},
		},
	},
	orderBy: [
		{booster: {name: "asc"}},
	],
	select: {
		booster: true,
	},
}), ({booster}) => booster!, BoosterRepository(defaults(toUserId())).map));
