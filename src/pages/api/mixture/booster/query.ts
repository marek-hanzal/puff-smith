import {defaults} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";
import deepmerge from "deepmerge";

export default QueryEndpoint<"Booster", IMixtureQuery, IBooster>(async ({request: {filter: {fulltext, ...filter} = {}}, toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["boosterId"],
	where: deepmerge(filter, {
		NOT: {
			boosterId: null,
		},
		booster: {
			OR: [
				{
					name: {
						contains: fulltext,
						mode: "insensitive",
					}
				},
				{
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					}
				},
			]
		},
	}),
	orderBy: [
		{booster: {name: "asc"}},
	],
	select: {
		booster: true,
	},
}), ({booster}) => booster!, BoosterService(defaults(toUserId())).map));
