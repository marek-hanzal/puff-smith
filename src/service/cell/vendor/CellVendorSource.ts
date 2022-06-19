import {ICellVendorSource} from "@/puff-smith/service/cell/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellVendorSource = (): ICellVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: ICellVendorSource = Source<ICellVendorSource>({
		name: "cell.vendor",
		prisma,
		map: async cell => vendorSource().map(cell?.vendor),
		acl: {
			lock: true,
		},
		source: {
			query: async () => source.prisma.cell.findMany({
				distinct: ["vendorId"],
				select: {
					vendor: true,
				},
				orderBy: [
					{vendor: {name: "asc"}},
				],
			}),
		},
	});

	return source;
};
