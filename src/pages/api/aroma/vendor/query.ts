import {ServiceCreate} from "@/puff-smith/service";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IQuery<{ fulltext?: string }>, IVendor>(async ({request, toUserId}) => {
	const vendorService = VendorService(ServiceCreate(toUserId()));
	const items = await Promise.all((await prisma.aroma.findMany({
		distinct: ["vendorId"],
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
					contains: request?.filter?.fulltext,
					mode: "insensitive",
				}
			}
		},
		include: {
			vendor: true,
		}
	})).map(async item => await vendorService.map(item.vendor)));

	return {
		items,
		count: items.length,
		total: items.length,
	};
});
