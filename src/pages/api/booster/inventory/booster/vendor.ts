import {ofParams} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {IQuery} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IQuery, IVendor>(async params => itemsOf(prisma.booster.findMany({
	distinct: ["vendorId"],
	where: {
		BoosterInventory: {
			some: {
				userId: params.toUserId(),
			},
		},
	},
	orderBy: [
		{vendor: {name: "asc"}},
	],
	include: {
		vendor: true,
	}
}), ({vendor}) => vendor, VendorRepository(ofParams(params)).map));
