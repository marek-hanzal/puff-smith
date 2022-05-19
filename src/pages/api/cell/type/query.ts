import {ICellQuery} from "@/puff-smith/service/cell/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Type", ICellQuery, ITag>(async () => itemsOf(prisma.cell.findMany({
	distinct: ["typeId"],
	orderBy: [
		{type: {sort: "asc"}},
	],
	select: {
		type: true,
	},
}), ({type}) => type, TagRepository().map));
