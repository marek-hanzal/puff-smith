import {defaults} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase} from "@/puff-smith/service/base/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", ILiquidQuery, IBase>(async ({request: {filter}, toUserId}) => itemsOf(prisma.liquid.findMany({
	distinct: ["baseId"],
	where: {
		userId: toUserId(),
		NOT: {
			baseId: null,
		},
		base: {
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
		},
	},
	orderBy: [
		{base: {name: "asc"}},
	],
	select: {
		base: true,
	},
}), ({base}) => base!, BaseService(defaults(toUserId())).map));
