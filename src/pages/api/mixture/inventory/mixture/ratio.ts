import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IMixtureQuery, IRatioItem>(async ({toUserId}) => {
	const items = (await prisma.mixture.findMany({
		distinct: ["vgToRound", "pgToRound"],
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
