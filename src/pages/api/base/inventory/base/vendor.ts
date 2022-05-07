import {ServiceCreate} from "@/puff-smith/service";
import cache from "@/puff-smith/service/side-effect/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IQuery} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";
import uniqueObjects from "unique-objects";

export default QueryEndpoint<"Vendor", IQuery, IVendor>(async ({toUserId}) => {
	const vendorService = VendorService(ServiceCreate(toUserId()));
	const items = uniqueObjects(await Promise.all((await prisma.baseInventory.findMany({
		where: {
			userId: toUserId(),
		},
		orderBy: [
			{base: {vendor: {name: "asc"}}},
		],
		include: {
			base: {
				include: {
					vendor: true,
				}
			}
		}
	})).map(async ({base: item}) => await vendorService.map(item.vendor))), ["id"]) as IVendor[];

	return {
		items,
		count: items.length,
		total: items.length,
	};
}, cache);