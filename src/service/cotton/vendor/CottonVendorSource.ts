import {ICottonVendorSource} from "@/puff-smith/service/cotton/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonVendorSource = (): ICottonVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: ICottonVendorSource = Source<ICottonVendorSource>({
		name: "cotton.vendor",
		prisma,
		source: {
			query: async ({filter}) => source.prisma.cotton.findMany({
				distinct: ["vendorId"],
				include: {
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
			}),
		},
		map: vendorSource().mapper.map,
	});

	return source;
};
