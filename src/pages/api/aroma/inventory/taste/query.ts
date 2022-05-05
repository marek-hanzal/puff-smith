import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Taste", IAromaQuery, ITag>(async ({toUserId}) => {
	const tagService = TagService();
	const items = uniqueObjects(await Promise.all((await prisma.aromaTaste.findMany({
		select: {
			taste: true,
		},
		where: {
			aroma: {
				AromaInventory: {
					some: {
						userId: toUserId(),
					},
				},
			},
		},
		orderBy: [
			{taste: {sort: "asc"}},
		],
	})).map(async item => await tagService.map(item.taste))), ["id"]) as ITag[];
	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
