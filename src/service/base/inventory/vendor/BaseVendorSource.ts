import {IBaseVendorSource} from "@/puff-smith/service/base/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseVendorSource = (): IBaseVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IBaseVendorSource = Source<IBaseVendorSource>({
		name: "base.inventory.vendor",
		prisma,
		source: {
			query: async () => source.prisma.base.findMany({
				distinct: ["vendorId"],
				include: {
					vendor: true,
				},
				where: {
					BaseInventory: {
						some: {
							userId: source.user.required(),
						}
					},
				},
				orderBy: [
					{vendor: {name: "asc"}},
				],
			}),
		},
		map: vendorSource().mapper.map,
	});

	return source;
};
