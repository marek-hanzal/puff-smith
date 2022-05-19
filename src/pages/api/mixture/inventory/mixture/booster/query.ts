import {defaults} from "@/puff-smith/service";
import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IBoosterQuery, IBooster>(async ({request: {filter}, toUserId}) => itemsOf(prisma.booster.findMany({
	where: {
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
		MixtureInventory: {
			some: {
				userId: toUserId(),
			},
		},
	},
	orderBy: [
		{name: "asc"},
	],
}), item => item, BoosterRepository(defaults(toUserId())).map));
