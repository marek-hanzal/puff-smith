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
			query: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					distinct: ["vendorId"],
					where: merge(filter || {}, {
						vendor: {
							name: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
						AND: [
							{
								aroma: {
									AromaInventory: {
										some: {
											userId,
										},
									},
								},
							},
							{
								OR: [
									{base: null},
									{
										base: {
											BaseInventory: {
												some: {
													userId,
												},
											},
										},
									},
								]
							},
							{
								OR: [
									{booster: null},
									{
										booster: {
											BoosterInventory: {
												some: {
													userId,
												},
											},
										},
									}
								],
							},
						]
					}),
					orderBy: [
						{vendor: {name: "asc"}}
					],
					select: {
						vendor: true,
					}
				});
			},
		}
	});

	return source;
};
