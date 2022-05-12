import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IQuery, ITag>(async () => itemsOf(prisma.wireDraw.findMany({
	distinct: ["drawId"],
	select: {
		draw: true,
	},
	orderBy: [
		{draw: {sort: "asc"}},
	],
}), ({draw}) => draw, TagService().map));
