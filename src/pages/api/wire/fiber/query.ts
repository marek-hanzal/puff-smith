import {FiberService} from "@/puff-smith/service/fiber/FiberService";
import {IFiber} from "@/puff-smith/service/fiber/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IWireQuery} from "@/puff-smith/service/wire/interface";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Fiber", IWireQuery, IFiber>(async ({}) => {
	const fiberService = FiberService();
	const items = uniqueObjects(await Promise.all((await prisma.wireFiber.findMany({
		select: {
			fiber: true,
		},
		orderBy: [
			{fiber: {code: "asc"}},
		],
	})).map(async item => await fiberService.map(item.fiber))), ["id"]) as IFiber[];
	return {
		items,
		count: items.length,
		total: items.length,
	};
});
