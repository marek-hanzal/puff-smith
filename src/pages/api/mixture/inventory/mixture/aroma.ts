import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Aroma", IMixtureQuery, IAroma>(async ({request, toUserId}) => {
	const aromaService = AromaService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.aroma.findMany({
		where: {
			AromaInventory: {
				some: {
					userId: toUserId(),
				}
			},
		},
		orderBy: [
			{name: "asc"},
		],
	})).map(async item => await aromaService.map(item))), ["id"]) as IAroma[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
