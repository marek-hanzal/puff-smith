import {defaults} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {IWireQuery} from "@/puff-smith/service/wire/interface";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IWireQuery, IVendor>(async ({request: {filter}, toUserId}) => itemsOf(prisma.wire.findMany({
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
}), ({vendor}) => vendor, VendorRepository(defaults(toUserId())).map));
