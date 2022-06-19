import {IBoosterVendorSource} from "@/puff-smith/service/booster/vendor/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterVendorSource = (): IBoosterVendorSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));

	const source: IBoosterVendorSource = Source<IBoosterVendorSource>({
		name: "booster.vendor",
		prisma,
		map: async booster => vendorSource().map(booster?.vendor),
		acl: {
			lock: true,
		},
		source: {
			query: async ({filter: {fulltext} = {}}) => source.prisma.booster.findMany({
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
