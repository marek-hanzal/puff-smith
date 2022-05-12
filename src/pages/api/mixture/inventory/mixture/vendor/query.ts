import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor, IVendorQuery} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
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
}), item => item, VendorService(ServiceCreate(toUserId())).map));
