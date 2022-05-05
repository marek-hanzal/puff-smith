import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export interface INicotineItem {
	label: string;
	value: string;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IQuery, INicotineItem>(async ({toUserId}) => {
	const items = uniqueObjects((await prisma.boosterInventory.findMany({
		select: {
			booster: true,
		},
		where: {
			userId: toUserId(),
		},
		orderBy: [
			{booster: {nicotine: "asc"}},
		]
	})).map(({booster: item}) => ({
		label: `${item.nicotine}`,
		value: `${item.nicotine}`,
		nicotine: item.nicotine.toNumber(),
	})), ["nicotine"]) as INicotineItem[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
