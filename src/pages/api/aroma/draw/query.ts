import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IQuery, ITag>(async ({toUserId}) => {
	const tagService = TagService(ServiceCreate(toUserId()));
	const items = await Promise.all((await prisma.aromaDraw.findMany({
		distinct: ["drawId"],
		orderBy: [
			{
				draw: {
					sort: "asc",
				}
			}
		],
		include: {
			draw: true,
		}
	})).map(async item => await tagService.map(item.draw)));

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
