import {defaults} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor, IVendorQuery} from "@/puff-smith/service/vendor/interface";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IVendorQuery, IVendor>(async ({request: {filter}, toUserId}) => itemsOf(prisma.vendor.findMany({
	where: {
		name: {
			contains: filter?.fulltext,
			mode: "insensitive",
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
}), item => item, VendorRepository(defaults(toUserId())).map));
