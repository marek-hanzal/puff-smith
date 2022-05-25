import {IModVendorSource} from "@/puff-smith/service/mod/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const ModVendorSource = (): IModVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IModVendorSource = Source<IModVendorSource>({
		name: "mod.vendor",
		prisma,
		map: async mod => vendorSource().map(mod?.vendor),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mod.count({
				distinct: ["vendorId"],
				where: merge(filter || {}, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mod.findMany({
				distinct: ["vendorId"],
				where: merge(filter || {}, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
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
