import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IWireQuery} from "@/puff-smith/service/wire/interface";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IWireQuery, IVendor>(async ({request: {filter}}) => itemsOf(prisma.wire.findMany({
	distinct: ["vendorId"],
	select: {
		vendor: true,
	},
	where: {
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			}
		}
	},
	orderBy: [
		{vendor: {name: "asc"}},
	],
}), ({vendor}) => vendor, VendorService().map));
