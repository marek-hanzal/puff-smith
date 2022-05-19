import {ofParams} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IQuery, ITag>(async params => itemsOf(prisma.wireDraw.findMany({
	distinct: ["drawId"],
	select: {
		draw: true,
	},
	orderBy: [
		{draw: {sort: "asc"}},
	],
}), ({draw}) => draw, TagRepository(ofParams(params)).map));
