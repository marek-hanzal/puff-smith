import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {ServiceCreate} from "@/puff-smith/service";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaInventoryService, IAromaInventoryServiceCreate} from "@/puff-smith/service/aroma/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const AromaInventoryService = (request: IAromaInventoryServiceCreate = ServiceCreate()): IAromaInventoryService => {
	return {
		...RepositoryService<IAromaInventoryService>({
			name: "aroma-inventory",
			source: request.prisma.aromaInventory,
			mapper: async aromaTransaction => ({
				...aromaTransaction,
				aroma: await AromaService(request).toMap(aromaTransaction.aromaId),
				transaction: await TransactionService(request).toMap(aromaTransaction.transactionId),
			}),
			create: async create => prisma.$transaction(async prisma => {
				const aroma = await AromaService({...request, prisma}).toMap(create.aromaId);
				return TransactionService({...request, prisma}).handleTransaction({
					userId: request.userService.getUserId(),
					cost: aroma.cost,
					note: `Purchase of aroma [${aroma.vendor.name} ${aroma.name}]`,
					callback: async transaction => {
						const $aromaInventory = prisma.aromaInventory.create({
							data: {
								aromaId: aroma.id,
								transactionId: transaction.id,
								userId: request.userService.getUserId(),
							}
						});
						await MixtureUserJob.async({userId: request.userService.getUserId()}, request.userService.getUserId());
						return $aromaInventory;
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
				const aromaInventory = await AromaInventoryService({...request, prisma}).list(prisma.aromaInventory.findMany({where}));
				await prisma.aromaInventory.deleteMany({
					where,
				});
				await prisma.mixtureInventory.deleteMany({
					where: {
						aromaId: {
							in: aromaInventory.map(item => item.aromaId),
						},
						userId: request.userService.getUserId(),
					}
				});
				return aromaInventory;
			});
		}
	};
};
