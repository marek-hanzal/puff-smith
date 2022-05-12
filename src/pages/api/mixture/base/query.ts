import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBase} from "@/puff-smith/service/base/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IMixtureQuery, IBase>(async ({request: {filter}, toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["baseId"],
	where: {
		NOT: {
			baseId: null,
		},
		base: {
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
					}
				}
			]
		},
	},
	orderBy: [
		{base: {name: "asc"}},
	],
	select: {
		base: true,
	},
}), ({base}) => base!, BaseService(ServiceCreate(toUserId())).map));
