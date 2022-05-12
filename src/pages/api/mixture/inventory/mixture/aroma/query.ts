import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", IAromaQuery, IAroma>(async ({request: {filter}, toUserId}) => itemsOf(prisma.aroma.findMany({
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
			}
		},
	},
	orderBy: [
		{name: "asc"},
	],
}), item => item, AromaService(ServiceCreate(toUserId())).map));
