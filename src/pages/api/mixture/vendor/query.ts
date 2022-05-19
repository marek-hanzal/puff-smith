import {defaults} from "@/puff-smith/service";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {itemsOf, QueryEndpoint} from "@leight-core/server";
import deepmerge from "deepmerge";

export default QueryEndpoint<"Vendor", IMixtureQuery, IVendor>(async ({request: {filter: {fulltext, ...filter} = {}}, toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["vendorId"],
	where: deepmerge(filter, {
		vendor: {
			name: {
				contains: fulltext,
				mode: "insensitive",
			},
		},
	}),
	orderBy: [
		{vendor: {name: "asc"}},
	],
	select: {
		vendor: true,
	},
}), ({vendor}) => vendor, VendorRepository(defaults(toUserId())).map));
