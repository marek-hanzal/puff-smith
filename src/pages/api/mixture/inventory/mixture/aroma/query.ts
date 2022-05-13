import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", IAromaQuery, IAroma>(async ({request: {filter}, toUserId}) => itemsOf(prisma.mixtureInventory.findMany({
	distinct: ["aromaId"],
	select: {
		aroma: true,
	},
	where: {
		aroma: {
			OR: [
				{
					name: {
						contains: filter?.fulltext,
						mode: "insensitive",
					},
				},
				{
					vendor: {
						name: {
							contains: filter?.fulltext,
							mode: "insensitive",
						},
					},
				}
			],
		},
		userId: toUserId(),
	},
	orderBy: [
		{aroma: {name: "asc"}},
	],
}), ({aroma}) => aroma, AromaService(ServiceCreate(toUserId())).map));
