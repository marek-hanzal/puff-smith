import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IQuery, ITag>(async ({toUserId}) => itemsOf(prisma.mixtureDraw.findMany({
	distinct: ["drawId"],
	orderBy: [
		{draw: {sort: "asc"}}
	],
	where: {
		mixture: {
			MixtureInventory: {
				some: {
					userId: toUserId(),
				}
			}
		}
	},
	select: {
		draw: true,
	}
}), ({draw}) => draw, TagService(ServiceCreate(toUserId())).map));
