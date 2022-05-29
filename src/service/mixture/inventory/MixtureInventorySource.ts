import {MixtureInventoryCache} from "@/puff-smith/service/mixture/inventory/cache";
import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureInventorySource = (): IMixtureInventorySource => {
	const mixtureSource = singletonOf(() => MixtureSource());

	const source: IMixtureInventorySource = Source<IMixtureInventorySource>({
		name: "mixture.inventory",
		prisma,
		map: async mixture => mixtureSource().map(mixture),
		cache: MixtureInventoryCache,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.mixture.count({
					where: merge(filter, {
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
				});
			},
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					where: merge(filter, {
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
					orderBy,
					include: {
						vendor: true,
						MixtureDraw: {
							orderBy: {draw: {sort: "asc"}},
							include: {
								draw: true,
							},
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
					...pageOf(query),
				});
			}
		},
	});

	return source;
};
