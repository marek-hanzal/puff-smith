import {ofParams} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cell", IQuery, ITag>(async params => itemsOf(prisma.modCell.findMany({
	distinct: ["cellId"],
	select: {
		cell: true,
	},
	orderBy: [
		{cell: {sort: "asc"}},
	],
}), ({cell}) => cell, TagRepository(ofParams(params)).map));
