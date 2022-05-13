import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag} from "@/puff-smith/service/tag/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Taste", IAromaQuery, ITag>(async ({toUserId}) => itemsOf(prisma.aromaTaste.findMany({
	distinct: ["tasteId"],
	select: {
		taste: true,
	},
	where: {
		aroma: {
			MixtureInventory: {
				some: {
					userId: toUserId(),
				},
			},
		},
	},
	orderBy: [
		{taste: {sort: "asc"}},
	],
}), ({taste}) => taste, TagService().map));
