import {ICellVendorSource} from "@/puff-smith/service/cell/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellVendorSource = (): ICellVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: ICellVendorSource = Source<ICellVendorSource>({
		name: "cell.vendor",
		prisma,
		source: {
			query: async () => source.prisma.cell.findMany({
				distinct: ["vendorId"],
				include: {
					vendor: true,
					type: true,
				},
				orderBy: [
					{vendor: {name: "asc"}},
				],
			}),
		},
		map: vendorSource().mapper.map,
	});

	return source;
};
