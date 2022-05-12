import {IBoosterQuery} from "@/puff-smith/service/booster/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface INicotineItem {
	label: string;
	value: string;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IBoosterQuery, INicotineItem>(async () => itemsOf(prisma.booster.findMany({
	distinct: ["nicotine"],
	orderBy: [
		{nicotine: "asc"},
	]
}), item => item, async item => ({
	label: `${item.nicotine}`,
	value: `${item.nicotine}`,
	nicotine: item.nicotine.toNumber(),
})));
