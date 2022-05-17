import {defaults} from "@/puff-smith/service";
import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IAromaQuery, IVendor>(async ({request: {filter}, toUserId}) => itemsOf(prisma.aroma.findMany({
	distinct: ["vendorId"],
	select: {
		vendor: true,
	},
	orderBy: [
		{
			vendor: {
				name: "asc",
			}
		}
	],
	where: {
		vendor: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			}
		}
	},
}), ({vendor}) => vendor, VendorService(defaults(toUserId())).map));
