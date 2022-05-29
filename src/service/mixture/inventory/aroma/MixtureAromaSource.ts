import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {MixtureAromaCache} from "@/puff-smith/service/mixture/inventory/aroma/cache";
import {IMixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureAromaSource = (): IMixtureAromaSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IMixtureAromaSource = Source<IMixtureAromaSource>({
		name: "mixture.inventory.aroma",
		prisma,
		map: async mixture => aromaSource().map(mixture?.aroma),
		cache: MixtureAromaCache,
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
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
				});
			},
		}
	});

	return source;
};
