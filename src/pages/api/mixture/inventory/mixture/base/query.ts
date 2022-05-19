import {defaults} from "@/puff-smith/service";
import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {IBase, IBaseQuery} from "@/puff-smith/service/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IBaseQuery, IBase>(async ({request: {filter}, toUserId}) => itemsOf(prisma.base.findMany({
	where: {
		name: {
			contains: filter?.fulltext,
			mode: "insensitive",
		},
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
		},
		MixtureInventory: {
			some: {
				userId: toUserId(),
			},
		},
	},
	orderBy: [
		{name: "asc"},
	],
}), item => item, BaseRepository(defaults(toUserId())).map));
