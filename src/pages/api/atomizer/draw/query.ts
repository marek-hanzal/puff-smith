import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IAtomizerQuery, ITag>(async () => itemsOf(prisma.atomizerDraw.findMany({
	distinct: ["drawId"],
	select: {
		draw: true,
	},
	orderBy: [
		{draw: {sort: "asc"}},
	],
}), ({draw}) => draw, TagRepository().map));
