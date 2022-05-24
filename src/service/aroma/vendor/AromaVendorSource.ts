import {IAromaVendorSource} from "@/puff-smith/service/aroma/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaVendorSource = (): IAromaVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IAromaVendorSource = Source<IAromaVendorSource>({
		name: "aroma-vendor",
		prisma,
		map: async ({vendor}) => vendorSource().mapper.map(vendor),
		source: {
			count: async () => source.prisma.aroma.count({
				distinct: ["vendorId"],
			}),
			query: async ({filter} = {}) => source.prisma.aroma.findMany({
				distinct: ["vendorId"],
				include: {
					vendor: true,
				},
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
							contains: filter?.fulltext,
							mode: "insensitive",
						}
					}
				},
			})
		},
	});

	return source;
};
