import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface INicotineItem {
	label: string;
	value: number;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IMixtureQuery, INicotineItem>(async ({request: {filter: {fulltext, ...filter} = {}}}) => itemsOf(prisma.mixture.findMany({
	distinct: ["nicotineToRound"],
	where: filter,
	orderBy: [
		{nicotineToRound: "asc"},
	]
}), item => item, async item => ({
	label: `${item.nicotineToRound}`,
	value: item.nicotineToRound,
	nicotine: item.nicotineToRound,
})));
