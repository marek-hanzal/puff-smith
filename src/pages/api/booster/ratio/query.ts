import {IBoosterQuery} from "@/puff-smith/service/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IBoosterQuery, IRatioItem>(async () => itemsOf(prisma.booster.findMany({
	distinct: ["pg", "vg"],
	orderBy: [
		{vg: "asc"},
	]
}), item => item, async ({pg, vg}) => ({
	label: `${vg}/${pg}`,
	value: `${vg}/${pg}`,
	vg,
	pg,
})));
