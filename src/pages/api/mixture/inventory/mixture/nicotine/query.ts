import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface INicotineItem {
	label: string;
	value: number;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IQuery, INicotineItem>(async ({toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["nicotineToRound"],
	where: {
		MixtureInventory: {
			some: {
				userId: toUserId(),
			},
		},
	},
	orderBy: [
		{nicotineToRound: "asc"},
	]
}), item => item, async item => ({
	label: `${item.nicotineToRound}`,
	value: item.nicotineToRound,
	nicotine: item.nicotineToRound,
})));
