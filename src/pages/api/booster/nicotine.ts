import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export interface INicotineItem {
	label: string;
	value: string;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IQuery, INicotineItem>(async () => {
	const items = uniqueObjects((await prisma.booster.findMany({
		select: {
			nicotine: true,
		},
		orderBy: [
			{nicotine: "asc"},
		]
	})).map(item => ({
		label: `${item.nicotine}`,
		value: `${item.nicotine}`,
		nicotine: item.nicotine.toNumber(),
	})), ["nicotine"]) as INicotineItem[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
