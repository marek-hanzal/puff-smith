import {IMixtureVendorSource} from "@/puff-smith/service/mixture/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureVendorSource = (): IMixtureVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: IMixtureVendorSource = Source<IMixtureVendorSource>({
		name: "mixture.vendor",
		prisma,
		map: async mixture => vendorSource().map(mixture?.vendor),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixture.findMany({
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
				select: {
					vendor: true,
				}
			}),
		}
	});

	return source;
};
