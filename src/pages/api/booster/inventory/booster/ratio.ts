import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IQuery, IRatioItem>(async ({toUserId}) => itemsOf(prisma.booster.findMany({
	distinct: ["vg", "pg"],
	select: {
		pg: true,
		vg: true,
	},
	where: {
		BoosterInventory: {
			some: {
				userId: toUserId(),
			},
		},
	},
	orderBy: [
		{vg: "asc"},
	]
}), item => item, async ({pg, vg}) => ({
	label: `${vg}/${pg}`,
	value: `${vg}/${pg}`,
	vg,
	pg,
})));
