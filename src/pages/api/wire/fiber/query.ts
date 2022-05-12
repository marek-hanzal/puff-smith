import {FiberService} from "@/puff-smith/service/fiber/FiberService";
import {IFiber} from "@/puff-smith/service/fiber/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery, IWhereFulltext} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Fiber", IQuery<IWhereFulltext>, IFiber>(async ({request: {filter}}) => itemsOf(prisma.wireFiber.findMany({
	distinct: ["fiberId"],
	select: {
		fiber: true,
	},
	where: {
		fiber: {
			code: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
		},
	},
	orderBy: [
		{fiber: {code: "asc"}},
	],
}), ({fiber}) => fiber, FiberService().map));
