import {FiberService} from "@/puff-smith/service/fiber/FiberService";
import {IFiber} from "@/puff-smith/service/fiber/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Fiber", IQuery, IFiber>(async () => itemsOf(prisma.wireFiber.findMany({
	distinct: ["fiberId"],
	select: {
		fiber: true,
	},
	orderBy: [
		{fiber: {code: "asc"}},
	],
}), ({fiber}) => fiber, FiberService().map));
