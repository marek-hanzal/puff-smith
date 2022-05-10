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

export default QueryEndpoint<"Ratio", IQuery, IRatioItem>(async () => {
	const items = uniqueObjects((await prisma.booster.findMany({
		select: {
			vg: true,
			pg: true,
		},
		orderBy: [
			{vg: "asc"},
		]
	})).map(item => ({
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
});
