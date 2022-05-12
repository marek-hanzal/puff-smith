import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IQuery, IRatioItem>(async ({toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["vgToRound", "pgToRound"],
	where: {
		MixtureInventory: {
			some: {
				userId: toUserId(),
			},
		},
	},
	orderBy: [
		{vgToRound: "asc"},
	]
}), item => item, async ({vgToRound, pgToRound}) => ({
	label: `${vgToRound}/${pgToRound}`,
	value: `${vgToRound}/${pgToRound}`,
	vg: vgToRound,
	pg: pgToRound,
})));
