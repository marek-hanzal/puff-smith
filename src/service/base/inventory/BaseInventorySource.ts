import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseInventorySource, IBaseInventorySourceCreate} from "@/puff-smith/service/base/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseInventorySource = (request: IBaseInventorySourceCreate): IBaseInventorySource => {
	const baseSource = singletonOf(() => BaseSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<IBaseInventorySource>({
			name: "base-inventory",
			source: request.prisma.baseInventory,
			mapper: async baseTransaction => ({
				...baseTransaction,
				base: await baseSource().toMap(baseTransaction.baseId),
				transaction: await transactionSource().toMap(baseTransaction.transactionId),
			}),
			create: async ({code, ...base}) => prisma.$transaction(async prisma => {
				const $base = await BaseSource({...request, prisma}).toMap(base.baseId);
				return TransactionSource({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: $base.cost,
					note: `Purchase of base [${$base.vendor.name} ${$base.name}]`,
					callback: async transaction => {
						const $baseInventory = prisma.baseInventory.create({
							data: {
								code: code || codeService().code(),
								baseId: $base.id,
								transactionId: transaction.id,
								userId: userId(),
							}
						});
						await MixtureUserJob.async({userId: userId(),}, userId());
						return $baseInventory;
					},
				});
			}),
		}),
		handleDelete: async ({request: {ids}}) => {
			const where = {
				id: {
					in: ids,
				},
				userId: userId(),
			};
			return prisma.$transaction(async prisma => {
				const baseInventory = await BaseInventorySource({...request, prisma}).list(prisma.baseInventory.findMany({where}));
				await prisma.baseInventory.deleteMany({
					where,
				});
				await prisma.mixtureInventory.deleteMany({
					where: {
						baseId: {
							in: baseInventory.map(item => item.baseId),
						},
						userId: userId(),
					}
				});
				return baseInventory;
			});
		}
	};
};
