import {IMixtureVendorSource} from "@/puff-smith/service/mixture/inventory/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureVendorSource = (): IMixtureVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IMixtureVendorSource = Source<IMixtureVendorSource>({
		name: "mixture.inventory.vendor",
		prisma,
		map: async mixtureInventory => vendorSource().map(mixtureInventory?.vendor),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixtureInventory.count({
				distinct: ["vendorId"],
				where: merge(filter || {}, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixtureInventory.findMany({
				distinct: ["vendorId"],
				where: merge(filter || {}, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
					userId: source.user.required(),
				}),
				orderBy: [
					{vendor: {name: "asc"}}
				],
				include: {
					vendor: true,
				}
			}),
		}
	});

	return source;
};
