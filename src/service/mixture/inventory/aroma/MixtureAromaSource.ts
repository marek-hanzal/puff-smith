import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IMixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureAromaSource = (): IMixtureAromaSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IMixtureAromaSource = Source<IMixtureAromaSource>({
		name: "mixture.inventory.aroma",
		prisma,
		map: async mixtureInventory => aromaSource().map(mixtureInventory?.aroma),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => prisma.mixtureInventory.count({
				distinct: ["aromaId"],
				where: merge(filter, {
					aroma: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => prisma.mixtureInventory.findMany({
				distinct: ["aromaId"],
				where: merge(filter, {
					aroma: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					},
					userId: source.user.required(),
				}),
				select: {
					aroma: {
						include: {
							vendor: true,
							AromaTaste: {
								orderBy: {taste: {sort: "asc"}},
								include: {
									taste: true,
								}
							}
						}
					},
				},
				orderBy: [
					{aroma: {name: "asc"}},
				],
			}),
		}
	});

	return source;
};
