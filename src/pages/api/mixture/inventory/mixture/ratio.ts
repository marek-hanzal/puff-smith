import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IMixtureQuery, IRatioItem>(async ({request, toUserId}) => {
	const items = uniqueObjects((await prisma.mixture.findMany({
		select: {
			vgToRound: true,
			pgToRound: true,
		},
		where: {
			AND: [
				{
					error: null,
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
	})), ["pg", "vg"]) as IRatioItem[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
