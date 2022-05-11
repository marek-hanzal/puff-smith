import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export interface INicotineItem {
	label: string;
	value: number;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IQuery, INicotineItem>(async ({toUserId}) => {
	const items = (await prisma.mixture.findMany({
		distinct: ["nicotineToRound"],
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
					OR: [
						{
							base: {
								BaseInventory: {
									some: {
										userId: toUserId(),
									},
								}
							}
						},
						{
							base: null,
						},
					],
				},
				{
					OR: [
						{
							booster: {
								BoosterInventory: {
									some: {
										userId: toUserId(),
									},
								}
							},
						},
						{
							booster: null,
						}
					],
				},
			],
		},
		orderBy: [
			{nicotineToRound: "asc"},
		]
	})).map(item => ({
		label: `${item.nicotineToRound}`,
		value: item.nicotineToRound,
		nicotine: item.nicotineToRound,
	}));

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
