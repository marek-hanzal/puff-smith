import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilInventorySource} from "@/puff-smith/service/coil/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CoilInventorySource = (): ICoilInventorySource => {
	const coilSource = singletonOf(() => CoilSource().ofSource(source));

	const source: ICoilInventorySource = Source<ICoilInventorySource>({
		name: "coil.inventory",
		prisma,
		map: async coil => coilSource().map(coil),
		acl: {
			lock: true,
		},
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => {
				const $fulltext = fulltext?.split(/\s+/g);
				return source.prisma.coil.count({
					where: merge(filter, {
						AND: ($fulltext?.map(fulltext => ({
							OR: [
								{
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
								{
									wire: {
										vendor: {
											name: {
												contains: fulltext,
												mode: "insensitive",
											},
										},
									},
								},
							],
						})) || []).concat(filter?.AND as [] || []),
						wire: {
							WireInventory: {
								some: {
									userId: source.user.required(),
								},
							},
						}
					}),
				});
			},
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => {
				const $fulltext = fulltext?.split(/\s+/g);
				return source.prisma.coil.findMany({
					where: merge(filter, {
						AND: ($fulltext?.map(fulltext => ({
							OR: [
								{
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
								{
									wire: {
										vendor: {
											name: {
												contains: fulltext,
												mode: "insensitive",
											},
										},
									},
								},
							],
						})) || []).concat(filter?.AND as [] || []),
						wire: {
							WireInventory: {
								some: {
									userId: source.user.required(),
								},
							},
						}
					}),
					orderBy,
					include: {
						wire: {
							include: {
								vendor: true,
								WireDraw: {
									orderBy: {draw: {sort: "asc"}},
									include: {
										draw: true,
									},
								},
								WireFiber: {
									include: {
										fiber: {
											include: {
												material: true,
											}
										}
									}
								}
							},
						},
						CoilDraw: {
							include: {
								draw: true,
							},
						},
					},
					...pageOf(query),
				});
			},
		},
	});

	return source;
};
