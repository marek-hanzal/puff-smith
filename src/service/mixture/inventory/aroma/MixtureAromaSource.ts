import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IMixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureAromaSource = (): IMixtureAromaSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IMixtureAromaSource = Source<IMixtureAromaSource>({
		name: "mixture.inventory.aroma",
		prisma,
		map: async mixtureInventory => aromaSource().map(mixtureInventory?.aroma),
		source: {
			count: async ({filter}) => prisma.mixtureInventory.count({
				distinct: ["aromaId"],
				where: {
					aroma: {
						OR: [
							{
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: filter?.fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				},
			}),
			query: async ({filter}) => prisma.mixtureInventory.findMany({
				distinct: ["aromaId"],
				include: {
					aroma: {
						include: {
							vendor: true,
						}
					},
					base: {
						include: {
							vendor: true,
						}
					},
					mixture: {
						include: {
							aroma: {
								include: {
									vendor: true,
								}
							},
							base: {
								include: {
									vendor: true,
								}
							},
							booster: {
								include: {
									vendor: true,
								}
							},
						}
					}
				},
				where: {
					aroma: {
						OR: [
							{
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: filter?.fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				},
				orderBy: [
					{aroma: {name: "asc"}},
				],
			}),
		}
	});

	return source;
};
