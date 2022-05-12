import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IMixtureQuery, IBooster>(async ({request: {filter}, toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["boosterId"],
	where: {
		NOT: {
			boosterId: null,
		},
		booster: {
			OR: [
				{
					name: {
						contains: filter?.fulltext,
						mode: "insensitive",
					}
				},
				{
					vendor: {
						name: {
							contains: filter?.fulltext,
							mode: "insensitive",
						},
					}
				},
			]
		},
	},
	orderBy: [
		{booster: {name: "asc"}},
	],
	select: {
		booster: true,
	},
}), ({booster}) => booster!, BoosterService(ServiceCreate(toUserId())).map));
