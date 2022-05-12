import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", ILiquidQuery, IAroma>(async ({request: {filter}, toUserId}) => itemsOf(prisma.liquid.findMany({
	distinct: ["aromaId"],
	where: {
		userId: toUserId(),
		aroma: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
			vendor: {
				name: {
					contains: filter?.fulltext,
					mode: "insensitive",
				},
			}
		},
	},
	orderBy: [
		{aroma: {name: "asc"}},
	],
	select: {
		aroma: true,
	},
}), ({aroma}) => aroma, AromaService(ServiceCreate(toUserId())).map));
