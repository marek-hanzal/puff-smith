import {IBoosterVendorSource} from "@/puff-smith/service/booster/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterVendorSource = (): IBoosterVendorSource => {
	const vendorSource = singletonOf(() => VendorSource());

	const source: IBoosterVendorSource = Source<IBoosterVendorSource>({
		name: "booster.inventory.vendor",
		prisma,
		source: {
			query: async () => source.prisma.booster.findMany({
				distinct: ["vendorId"],
				include: {
					vendor: true,
				},
				where: {
					BoosterInventory: {
						some: {
							userId: source.user.required(),
						}
					},
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
