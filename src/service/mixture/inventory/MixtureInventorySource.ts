import {MixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/MixtureAromaSource";
import {AromaTasteSource} from "@/puff-smith/service/mixture/inventory/aroma/taste/AromaTasteSource";
import {MixtureBaseSource} from "@/puff-smith/service/mixture/inventory/base/MixtureBaseSource";
import {MixtureBoosterSource} from "@/puff-smith/service/mixture/inventory/booster/MixtureBoosterSource";
import {MixtureInventoryCache} from "@/puff-smith/service/mixture/inventory/cache";
import {MixtureDrawSource} from "@/puff-smith/service/mixture/inventory/draw/MixtureDrawSource";
import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureNicotineSource} from "@/puff-smith/service/mixture/inventory/nicotine/MixtureNicotineSource";
import {MixtureRatioSource} from "@/puff-smith/service/mixture/inventory/ratio/MixtureRatioSource";
import {MixtureVendorSource} from "@/puff-smith/service/mixture/inventory/vendor/MixtureVendorSource";
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
			clearCache: async () => {
				await MixtureAromaSource().ofSource(source).clearCache();
				await MixtureBoosterSource().ofSource(source).clearCache();
				await MixtureBaseSource().ofSource(source).clearCache();
				await MixtureNicotineSource().ofSource(source).clearCache();
				await MixtureRatioSource().ofSource(source).clearCache();
				await MixtureDrawSource().ofSource(source).clearCache();
				await MixtureVendorSource().ofSource(source).clearCache();
				await AromaTasteSource().ofSource(source).clearCache();
			},
			count: async ({filter: {fulltext, ...filter} = {}}) => {
				const userId = source.user.required();
				return source.prisma.mixture.count({
					where: merge(filter, {
						MixtureInventory: {
							some: {
								userId,
							},
						},
					}),
				});
			},
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					where: merge(filter, {
						MixtureInventory: {
							some: {
								userId,
							},
						},
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
