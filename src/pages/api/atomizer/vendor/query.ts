import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IAtomizerQuery, IVendor>(async ({request: {filter}}) => itemsOf(prisma.atomizer.findMany({
	distinct: ["vendorId"],
	select: {
		vendor: true,
	},
	where: {
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
		}
	},
	orderBy: [
		{vendor: {name: "asc"}},
	],
}), ({vendor}) => vendor, VendorService().map));
