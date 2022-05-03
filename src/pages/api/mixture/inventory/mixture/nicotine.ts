import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export interface INicotineItem {
	label: string;
	value: number;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IQuery, INicotineItem>(async ({toUserId}) => {
	const items = uniqueObjects((await prisma.mixture.findMany({
		select: {
			nicotineToRound: true,
		},
		where: {
			AND: [
				{
					aroma: {
						AromaInventory: {
							some: {
								userId: toUserId(),
							}
						}
					},
				},
				{
					base: {
						BaseInventory: {
							some: {
								userId: toUserId(),
							}
						}
					},
				},
				{
					booster: {
						BoosterInventory: {
							some: {
								userId: toUserId(),
							}
						}
					}
				}
			]
		},
		orderBy: [
			{nicotineToRound: "asc"},
		]
	})).map(item => ({
		label: `${item.nicotineToRound}`,
		value: item.nicotineToRound,
		nicotine: item.nicotineToRound,
	})), ["nicotine"]) as INicotineItem[];

	return {
		items: ([{label: "0", value: 0, nicotine: 0}] as INicotineItem[]).concat(items),
		count: items.length,
		total: items.length,
	};
});
