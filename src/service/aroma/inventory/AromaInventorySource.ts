import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {AromaMarketSource} from "@/puff-smith/service/aroma/market/AromaMarketSource";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {MixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/MixtureAromaSource";
import {MixtureInventorySource} from "@/puff-smith/service/mixture/inventory/MixtureInventorySource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AromaInventorySource = (): IAromaInventorySource => {
	const aromaSource = singletonOf(() => AromaSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const mixtureAromaSource = singletonOf(() => MixtureAromaSource());
	const aromaMarketSource = singletonOf(() => AromaMarketSource());
	const mixtureInventorySource = singletonOf(() => MixtureInventorySource());
	const codeService = singletonOf(() => CodeService());

	const source: IAromaInventorySource = Source<IAromaInventorySource>({
		name: "aroma.inventory",
		prisma,
		map: async aromaInventory => aromaInventory ? {
			...aromaInventory,
			aroma: await aromaSource().mapper.map(aromaInventory.aroma),
			transaction: await transactionSource().mapper.map(aromaInventory.transaction),
		} : undefined,
		source: {
			clearCache: async () => {
				await mixtureAromaSource().clearCache();
				await aromaMarketSource().clearCache();
				await mixtureInventorySource().clearCache();
			},
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.aromaInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.aromaInventory.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					aroma: {
						include: {
							vendor: true,
							AromaTaste: {
								orderBy: {taste: {sort: "asc"}},
								include: {
									taste: true,
								}
							},
						},
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...aroma}) => prisma.$transaction(async prisma => {
				const transactionSource = TransactionSource().withPrisma(prisma);
				const $aroma = await AromaSource().withPrisma(prisma).get(aroma.aromaId);
				const userId = source.user.required();
				return transactionSource.handleTransaction({
					userId,
					cost: $aroma.cost,
					note: `Purchase of aroma [${$aroma.vendor.name} ${$aroma.name}]`,
					callback: async transaction => prisma.aromaInventory.create({
						data: {
							code: code || codeService().code(),
							aromaId: $aroma.id,
							transactionId: transaction.id,
							userId,
						},
						include: {
							aroma: {
								include: {
									vendor: true,
									AromaTaste: {
										orderBy: {taste: {sort: "asc"}},
										include: {
											taste: true,
										}
									},
								},
							},
							transaction: true,
						}
					}),
				});
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const aromaInventory = await prisma.aromaInventory.findMany({
						where,
						include: {
							aroma: {
								include: {
									vendor: true,
									AromaTaste: {
										orderBy: {taste: {sort: "asc"}},
										include: {
											taste: true,
										}
									},
								}
							},
							transaction: true,
						}
					});
					await prisma.aromaInventory.deleteMany({
						where,
					});
					return aromaInventory;
				});
			}
		}
	});

	return source;
};
