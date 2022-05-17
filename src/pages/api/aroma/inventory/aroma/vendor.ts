import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IQuery, IWhereFulltext} from "@leight-core/api";
import {itemsOf, QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IQuery<IWhereFulltext>, IVendor>(async ({request: {filter}, toUserId}) => {
	return itemsOf(prisma.vendor.findMany({
		where: {
			name: {
				contains: filter?.fulltext,
				mode: "insensitive",
			},
			Aroma: {
				some: {
					AromaInventory: {
						some: {
							userId: toUserId(),
						},
					},
				}
			},
		},
		orderBy: [
			{name: "asc"},
		],
	}), item => item, VendorService(ServiceCreate(toUserId())).map);
});
