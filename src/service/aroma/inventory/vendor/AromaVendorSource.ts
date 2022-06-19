import {IAromaVendorSource} from "@/puff-smith/service/aroma/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaVendorSource = (): IAromaVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: IAromaVendorSource = Source<IAromaVendorSource>({
		name: "aroma.inventory.vendor",
		prisma,
		map: aroma => vendorSource().map(aroma?.vendor),
		source: {
			count: async () => source.prisma.aroma.count({
				distinct: ["vendorId"],
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => prisma.aroma.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				where: {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
					AromaInventory: {
						some: {
							userId: source.user.required(),
						},
					}
				},
				orderBy: [
					{vendor: {name: "asc"}},
				],
			})
		},
	});

	return source;
};
