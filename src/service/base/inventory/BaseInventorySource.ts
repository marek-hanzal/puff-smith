import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BaseInventorySource = (): IBaseInventorySource => {
	const baseSource = singletonOf(() => BaseSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: IBaseInventorySource = Source<IBaseInventorySource>({
		name: "base.inventory",
		prisma,
		map: async baseInventory => baseInventory ? ({
			...baseInventory,
			base: await baseSource().mapper.map(baseInventory.base),
			transaction: await transactionSource().mapper.map(baseInventory.transaction),
		}) : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.baseInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.baseInventory.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					base: {
						include: {
							vendor: true,
						}
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...baseInventory}) => prisma.$transaction(async prisma => {
				const transactionSource = TransactionSource().withPrisma(prisma);
				const $base = await BaseSource().withPrisma(prisma).get(baseInventory.baseId);
				const userId = source.user.required();
				return transactionSource.handleTransaction({
					userId,
					cost: $base.cost,
					note: `Purchase of base [${$base.vendor.name} ${$base.name}]`,
					callback: async transaction => {
						const $baseInventory = prisma.baseInventory.create({
							data: {
								code: code || codeService().code(),
								baseId: $base.id,
								transactionId: transaction.id,
								userId,
							},
							include: {
								base: {
									include: {
										vendor: true,
									}
								},
								transaction: true,
							}
						});
						await MixtureUserJob.async({userId}, userId);
						return $baseInventory;
					},
				});
			}),
			delete: async ids => {
				const userId = source.user.required();
				const where = {
					id: {
						in: ids,
					},
					userId,
				};
				return prisma.$transaction(async prisma => {
					const baseInventory = await prisma.baseInventory.findMany({
						where,
						include: {
							base: {
								include: {
									vendor: true,
								}
							},
							transaction: true,
						}
					});
					await prisma.baseInventory.deleteMany({
						where,
					});
					await prisma.mixtureInventory.deleteMany({
						where: {
							baseId: {
								in: baseInventory.map(item => item.baseId),
							},
							userId,
						}
					});
					return baseInventory;
				});
			}
		}
	});

	return source;
};
