import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {MixtureBaseCache} from "@/puff-smith/service/mixture/inventory/base/cache";
import {IMixtureBaseSource} from "@/puff-smith/service/mixture/inventory/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureBaseSource = (): IMixtureBaseSource => {
	const baseSource = singletonOf(() => BaseSource());

	const source: IMixtureBaseSource = Source<IMixtureBaseSource>({
		name: "mixture.inventory.base",
		prisma,
		map: async mixture => baseSource().map(mixture?.base),
		cache: MixtureBaseCache,
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					distinct: ["baseId"],
					select: {
						base: {
							include: {
								vendor: true,
							}
						},
					},
					where: merge(filter, {
						base: {
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
					orderBy: [
						{base: {name: "asc"}},
					],
				});
			},
		}
	});

	return source;
};
