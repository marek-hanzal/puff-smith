import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
import {AromaTasteCache} from "@/puff-smith/service/mixture/inventory/aroma/taste/cache";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AromaTasteSource = (): IAromaTasteSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: IAromaTasteSource = Source<IAromaTasteSource>({
		name: "mixture.inventory.aroma.taste",
		prisma,
		map: aromaTaste => tagSource().map(aromaTaste?.taste),
		cache: AromaTasteCache,
		source: {
			count: async () => source.prisma.aromaTaste.count({
				distinct: ["tasteId"],
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.aromaTaste.findMany({
					distinct: ["tasteId"],
					select: {
						taste: true,
					},
					where: merge(filter || {}, {
						aroma: {
							Mixture: {
								some: {
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
								}
							}
						}
					}),
					orderBy: [
						{taste: {sort: "asc"}},
					],
				});
			},
		},
	});

	return source;
};
