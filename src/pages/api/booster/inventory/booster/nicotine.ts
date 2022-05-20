import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export interface INicotineItem {
	label: string;
	value: string;
	nicotine: number;
}

export default QueryEndpoint<"Nicotine", IQuery, INicotineItem>(async params => itemsOf(prisma.booster.findMany({
	select: {
		nicotine: true,
	},
	where: {
		BoosterInventory: {
			some: {
				userId: params.toUserId(),
			},
		},
	},
	orderBy: [
		{nicotine: "asc"},
	]
}), item => item, async ({nicotine}) => ({
	label: `${nicotine}`,
	value: `${nicotine}`,
	nicotine: nicotine,
})));
