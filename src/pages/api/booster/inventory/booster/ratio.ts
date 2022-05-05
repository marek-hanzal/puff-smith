import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export default QueryEndpoint<"Ratio", IQuery, IRatioItem>(async ({toUserId}) => {
	const items = uniqueObjects((await prisma.boosterInventory.findMany({
		select: {
			booster: true,
		},
		where: {
			userId: toUserId(),
		},
		orderBy: [
			{booster: {vg: "asc"}},
		]
	})).map(({booster: item}) => ({
		label: `${item.vg}/${item.pg}`,
		value: `${item.vg}/${item.pg}`,
		vg: item.vg.toNumber(),
		pg: item.pg.toNumber(),
	})), ["pg", "vg"]) as IRatioItem[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
