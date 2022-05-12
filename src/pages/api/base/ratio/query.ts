import {IBaseQuery} from "@/puff-smith/service/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IBaseQuery, IRatioItem>(async () => itemsOf(prisma.base.findMany({
	distinct: ["pg", "vg"],
	select: {
		pg: true,
		vg: true,
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
