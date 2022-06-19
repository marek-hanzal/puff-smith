import {ICoilVendorSource} from "@/puff-smith/service/coil/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CoilVendorSource = (): ICoilVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: ICoilVendorSource = Source<ICoilVendorSource>({
		name: "coil.inventory.vendor",
		prisma,
		map: async coil => vendorSource().map(coil?.vendor),
		acl: {
			lock: true,
		},
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wire.count({
				distinct: ["vendorId"],
				where: merge(filter, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						}
					},
					WireInventory: {
						some: {
							userId: source.user.required(),
						}
					},
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wire.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				orderBy: [
					{
						vendor: {name: "asc"}
					}
				],
				where: merge(filter, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						}
					},
					WireInventory: {
						some: {
							userId: source.user.required(),
						}
					},
				}),
			})
		},
	});

	return source;
};
