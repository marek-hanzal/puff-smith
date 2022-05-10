import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor, IVendorQuery} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Vendor", IVendorQuery, IVendor>(async ({}) => {
	const vendorService = VendorService();
	const items = uniqueObjects(await Promise.all((await prisma.cotton.findMany({
		select: {
			vendor: true,
		},
		orderBy: [
			{vendor: {name: "asc"}},
		],
	})).map(async item => await vendorService.map(item.vendor))), ["id"]) as IVendor[];
	return {
		items,
		count: items.length,
		total: items.length,
	};
});
