import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Aroma", ILiquidQuery, IAroma>(async ({toUserId}) => {
	const aromaService = AromaService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.liquid.findMany({
		where: {
			userId: toUserId(),
		},
		orderBy: [
			{mixture: {aroma: {name: "asc"}}},
		],
		include: {
			mixture: {
				include: {
					aroma: true,
				},
			},
		},
	})).map(async item => await aromaService.map(item.mixture.aroma))), ["id"]) as IAroma[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
