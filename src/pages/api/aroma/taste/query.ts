import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Taste", IAromaQuery, ITag>(async ({}) => {
	const tagService = TagService();
	const items = await Promise.all((await prisma.aromaTaste.findMany({
		distinct: ["tasteId"],
		select: {
			taste: true,
		},
		orderBy: [
			{taste: {sort: "asc"}},
		],
	})).map(async item => await tagService.map(item.taste)));
	return {
		items,
		count: items.length,
		total: items.length,
	};
});
