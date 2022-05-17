import {defaults} from "@/puff-smith/service";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IMixtureQuery, ITag>(async ({request: {filter: {fulltext, ...filter} = {}}, toUserId}) => itemsOf(prisma.mixtureDraw.findMany({
	distinct: ["drawId"],
	where: {
		mixture: filter,
	},
	orderBy: [
		{draw: {sort: "asc"}}
	],
	select: {
		draw: true,
	}
}), ({draw}) => draw, TagService(defaults(toUserId())).map));
