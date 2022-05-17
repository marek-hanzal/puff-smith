import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBaseInventoryService, IBaseInventoryServiceCreate} from "@/puff-smith/service/base/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const BaseInventoryService = (request: IBaseInventoryServiceCreate = ServiceCreate()): IBaseInventoryService => {
	const baseService = singletonOf(() => BaseService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = request.userService.getUserId();

	return {
		...RepositoryService<IBaseInventoryService>({
			name: "base-inventory",
			source: request.prisma.baseInventory,
			mapper: async baseTransaction => ({
				...baseTransaction,
				base: await baseService().toMap(baseTransaction.baseId),
				transaction: await transactionService().toMap(baseTransaction.transactionId),
			}),
			create: async ({code, ...base}) => prisma.$transaction(async prisma => {
				const $base = await BaseService({...request, prisma}).toMap(base.baseId);
				return TransactionService({...request, prisma}).handleTransaction({
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
							}
						});
						await MixtureUserJob.async({userId}, userId);
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
				userId,
			};
			return prisma.$transaction(async prisma => {
				const baseInventory = await BaseInventoryService({...request, prisma}).list(prisma.baseInventory.findMany({where}));
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
	};
};
