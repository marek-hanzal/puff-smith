import {ServiceCreate} from "@/puff-smith/service";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IMixtureQuery, IVendor>(async ({request: {filter}, toUserId}) => itemsOf(prisma.mixture.findMany({
	distinct: ["vendorId"],
	where: {
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
		},
	},
	orderBy: [
		{vendor: {name: "asc"}},
	],
	select: {
		vendor: true,
	},
}), ({vendor}) => vendor, VendorService(ServiceCreate(toUserId())).map));
