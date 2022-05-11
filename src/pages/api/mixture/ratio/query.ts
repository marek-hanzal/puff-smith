import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IMixtureQuery, IRatioItem>(async () => {
	const items = (await prisma.mixture.findMany({
		distinct: ["vgToRound", "pgToRound"],
		orderBy: [
			{vgToRound: "asc"},
		]
	})).map(item => ({
		label: `${item.vgToRound}/${item.pgToRound}`,
		value: `${item.vgToRound}/${item.pgToRound}`,
		vg: item.vgToRound,
		pg: item.pgToRound,
	}));

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
