import {defaults} from "@/puff-smith/service";
import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {IBase} from "@/puff-smith/service/base/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {itemsOf, QueryEndpoint} from "@leight-core/server";
import deepmerge from "deepmerge";

export default QueryEndpoint<"Base", IMixtureQuery, IBase>(async ({request: {filter: {fulltext, ...filter} = {}}, toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["baseId"],
	where: deepmerge(filter, {
		NOT: {
			baseId: null,
		},
		base: {
			OR: [
				{
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				},
				{
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					}
				}
			]
		},
	}),
	orderBy: [
		{base: {name: "asc"}},
	],
	select: {
		base: true,
	},
}), ({base}) => base!, BaseRepository(defaults(toUserId())).map));
