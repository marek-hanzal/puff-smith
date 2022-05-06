import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Cell", IAtomizerQuery, ITag>(async ({}) => {
	const tagService = TagService();
	const items = uniqueObjects(await Promise.all((await prisma.modCell.findMany({
		select: {
			cell: true,
		},
		orderBy: [
			{cell: {sort: "asc"}},
		],
	})).map(async item => await tagService.map(item.cell))), ["id"]) as ITag[];
	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);
