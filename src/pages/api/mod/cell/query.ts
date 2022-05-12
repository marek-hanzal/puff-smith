import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cell", IQuery, ITag>(async () => itemsOf(prisma.modCell.findMany({
	distinct: ["cellId"],
	select: {
		cell: true,
	},
	orderBy: [
		{cell: {sort: "asc"}},
	],
}), ({cell}) => cell, TagService().map));
