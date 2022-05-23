import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {QueryEndpoint} from "@leight-core/server";

// export default QueryEndpoint<"Vendor", IVendorSource>(async ({request: {filter}, user}) => {
// 	return itemsOf(prisma.vendor.findMany({
// 		where: {
// 			name: {
// 				contains: filter?.fulltext,
// 				mode: "insensitive",
// 			},
// 			Aroma: {
// 				some: {
// 					AromaInventory: {
// 						some: {
// 							userId: user.re,
// 						},
// 					},
// 				}
// 			},
// 		},
// 		orderBy: [
// 			{name: "asc"},
// 		],
// 	}), item => item, VendorRepository().source.mapper.map);
// });

export default QueryEndpoint<"Vendor", IVendorSource>(VendorRepository().source);
