import {IBaseVendorSource} from "@/puff-smith/service/base/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseVendorSource = (): IBaseVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: IBaseVendorSource = Source<IBaseVendorSource>({
		name: "base.vendor",
		prisma,
		map: async base => vendorSource().map(base?.vendor),
		acl: {
			lock: true,
		},
		source: {
			query: async ({filter: {fulltext} = {}}) => source.prisma.base.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				where: {
					vendor: {
						name: {
							contains: fulltext,
							mode: "insensitive",
						}
					},
				},
				orderBy: [
					{vendor: {name: "asc"}},
				],
			}),
		},
	});

	return source;
};
