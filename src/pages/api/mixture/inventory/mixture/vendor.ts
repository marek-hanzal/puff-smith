import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Vendor", IQuery, IVendor>(async ({toUserId}) => {
	const vendorService = VendorService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.vendor.findMany({
		where: {
			Aroma: {
				some: {
					AromaInventory: {
						some: {
							userId: toUserId(),
						},
					},
				},
			},
		},
	})).map(async item => await vendorService.map(item))), ["id"]) as IVendor[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
