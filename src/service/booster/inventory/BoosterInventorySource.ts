import {MixtureInventoryBoosterJob} from "@/puff-smith/jobs/mixture/job";
import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BoosterInventorySource = (): IBoosterInventorySource => {
	const boosterSource = singletonOf(() => BoosterSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: IBoosterInventorySource = Source<IBoosterInventorySource>({
		name: "booster.inventory",
		prisma,
		map: async boosterInventory => boosterInventory ? ({
			...boosterInventory,
			booster: await boosterSource().mapper.map(boosterInventory.booster),
			transaction: await transactionSource().mapper.map(boosterInventory.transaction),
		}) : boosterInventory,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.boosterInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.boosterInventory.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					booster: {
						include: {
							vendor: true,
						}
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...booster}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const transactionSource = TransactionSource().withPrisma(prisma);
				const $booster = await BoosterSource().withPrisma(prisma).get(booster.boosterId);
				return transactionSource.handleTransaction({
					userId,
					cost: $booster.cost,
					note: `Purchase of booster [${$booster.vendor.name} ${$booster.name}]`,
					callback: async transaction => {
						const boosterInventory = prisma.boosterInventory.create({
							data: {
								code: code || codeService().code(),
								boosterId: $booster.id,
								transactionId: transaction.id,
								userId,
							},
							include: {
								booster: {
									include: {
										vendor: true,
									}
								},
								transaction: true,
							},
						});
						await MixtureInventoryBoosterJob.async({boosterId: $booster.id}, userId);
						return boosterInventory;
					},
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
					const boosterInventory = await prisma.boosterInventory.findMany({
						where,
						include: {
							booster: {
								include: {
									vendor: true,
								}
							},
							transaction: true,
						},
					});
					await prisma.boosterInventory.deleteMany({
						where,
					});
					return boosterInventory;
				});
			},
		}
	});

	return source;
};
