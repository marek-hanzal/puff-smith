import {IAtomizerVendorSource} from "@/puff-smith/service/atomizer/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerVendorSource = (): IAtomizerVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IAtomizerVendorSource = Source<IAtomizerVendorSource>({
		name: "atomizer-vendor",
		prisma,
		map: async ({vendor}) => vendorSource().mapper.map(vendor),
		source: {
			count: async () => source.prisma.atomizer.count({
				distinct: ["vendorId"],
			}),
			query: async ({filter} = {}) => source.prisma.atomizer.findMany({
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
