import {IAtomizerVendorSource} from "@/puff-smith/service/atomizer/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AtomizerVendorSource = (): IAtomizerVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: IAtomizerVendorSource = Source<IAtomizerVendorSource>({
		name: "atomizer.vendor",
		prisma,
		map: async atomizer => vendorSource().map(atomizer?.vendor),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.atomizer.count({
				distinct: ["vendorId"],
				where: merge(filter, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						}
					}
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.atomizer.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				orderBy: [
					{
						vendor: {
							name: "asc",
						}
					}
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
