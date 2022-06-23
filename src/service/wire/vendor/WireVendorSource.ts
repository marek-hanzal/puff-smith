import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {IWireVendorSource} from "@/puff-smith/service/wire/vendor/interface";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const WireVendorSource = (): IWireVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: IWireVendorSource = Source<IWireVendorSource>({
		name: "wire.vendor",
		prisma,
		map: async wire => vendorSource().map(wire?.vendor),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wire.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				where: merge(filter, {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						}
					}
				}),
				orderBy: [
					{vendor: {name: "asc"}},
				],
			}),
		},
	});

	return source;
};
