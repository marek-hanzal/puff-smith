import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {ServiceCreate} from "@/puff-smith/service";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {IBaseInventoryService, IBaseInventoryServiceCreate} from "@/puff-smith/service/base/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const BaseInventoryService = (request: IBaseInventoryServiceCreate = ServiceCreate()): IBaseInventoryService => {
	return {
		...RepositoryService<IBaseInventoryService>({
			name: "base-inventory",
			source: request.prisma.baseInventory,
			mapper: async baseTransaction => ({
				...baseTransaction,
				base: await BaseService(request).toMap(baseTransaction.baseId),
				transaction: await TransactionService(request).toMap(baseTransaction.transactionId),
			}),
			create: async create => prisma.$transaction(async prisma => {
				const base = await BaseService({...request, prisma}).toMap(create.baseId);
				return TransactionService({...request, prisma}).handleTransaction({
					userId: request.userService.getUserId(),
					cost: base.cost,
					note: `Purchase of base [${base.vendor.name} ${base.name}]`,
					callback: async transaction => {
						const $baseInventory = prisma.baseInventory.create({
							data: {
								baseId: base.id,
								transactionId: transaction.id,
								userId: request.userService.getUserId(),
							}
						});
						await MixtureUserJob.async({userId: request.userService.getUserId()}, request.userService.getUserId());
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
				userId: request.userService.getUserId(),
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
						userId: request.userService.getUserId(),
					}
				});
				return baseInventory;
			});
		}
	};
};
