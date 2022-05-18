import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaInventoryService, IAromaInventoryServiceCreate} from "@/puff-smith/service/aroma/inventory/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const AromaInventoryService = (request: IAromaInventoryServiceCreate): IAromaInventoryService => {
	const aromaService = singletonOf(() => AromaService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...RepositoryService<IAromaInventoryService>({
			name: "aroma-inventory",
			source: request.prisma.aromaInventory,
			mapper: async aromaTransaction => ({
				...aromaTransaction,
				aroma: await aromaService().toMap(aromaTransaction.aromaId),
				transaction: await transactionService().toMap(aromaTransaction.transactionId),
			}),
			create: async ({code, ...aroma}) => prisma.$transaction(async prisma => {
				const $aroma = await AromaService({...request, prisma}).toMap(aroma.aromaId);
				return TransactionService({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: $aroma.cost,
					note: `Purchase of aroma [${$aroma.vendor.name} ${$aroma.name}]`,
					callback: async transaction => {
						const $aromaInventory = prisma.aromaInventory.create({
							data: {
								code: code || codeService().code(),
								aromaId: $aroma.id,
								transactionId: transaction.id,
								userId: userId(),
							}
						});
						await MixtureUserJob.async({userId: userId()}, userId());
						await memoIsOwned.delete($aroma.id, userId());
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
				userId: userId(),
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
						userId: userId(),
					}
				});
				return aromaInventory;
			});
		}
	};
};
