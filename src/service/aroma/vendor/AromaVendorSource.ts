import {IAromaVendorSource} from "@/puff-smith/service/aroma/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AromaVendorSource = (): IAromaVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IAromaVendorSource = Source<IAromaVendorSource>({
		name: "aroma-vendor",
		prisma,
		map: async aroma => vendorSource().map(aroma?.vendor),
		source: {
			count: async () => source.prisma.aroma.count({
				distinct: ["vendorId"],
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.aroma.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				orderBy: [
					{vendor: {name: "asc"}},
				],
				where: merge(filter, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						}
					}
				}),
			})
		},
	});

	return source;
};
