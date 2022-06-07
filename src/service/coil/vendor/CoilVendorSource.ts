import {ICoilVendorSource} from "@/puff-smith/service/coil/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CoilVendorSource = (): ICoilVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: ICoilVendorSource = Source<ICoilVendorSource>({
		name: "coil.vendor",
		prisma,
		map: async coil => vendorSource().map(coil?.vendor),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.coil.count({
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
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.coil.findMany({
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
