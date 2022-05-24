import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseInventorySource = (): IBaseInventorySource => {
	const baseSource = singletonOf(() => BaseSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: IBaseInventorySource = Source<IBaseInventorySource>({
		name: "base.inventory",
		prisma,
		map: async baseTransaction => ({
			...baseTransaction,
			base: await baseSource().mapper.map(baseTransaction.base),
			transaction: await transactionSource().mapper.map(baseTransaction.transaction),
		}),
		source: {
			create: async ({code, ...baseInventory}) => prisma.$transaction(async prisma => {
				const baseSource = BaseSource();
				const transactionSource = TransactionSource();
				baseSource.withPrisma(prisma);
				transactionSource.withPrisma(prisma);
				const $base = await baseSource.get(baseInventory.baseId);
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
