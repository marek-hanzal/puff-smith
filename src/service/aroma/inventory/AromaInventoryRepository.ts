import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {AromaRepository} from "@/puff-smith/service/aroma/AromaRepository";
import {IAromaInventoryRepository, IAromaInventoryRepositoryCreate} from "@/puff-smith/service/aroma/inventory/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaInventoryRepository = (request: IAromaInventoryRepositoryCreate): IAromaInventoryRepository => {
	const aromaRepository = singletonOf(() => AromaRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IAromaInventoryRepository>({
			name: "aroma-inventory",
			source: request.prisma.aromaInventory,
			mapper: async aromaTransaction => ({
				...aromaTransaction,
				aroma: await aromaRepository().toMap(aromaTransaction.aromaId),
				transaction: await transactionRepository().toMap(aromaTransaction.transactionId),
			}),
			create: async ({code, ...aroma}) => prisma.$transaction(async prisma => {
				const $aroma = await AromaRepository({...request, prisma}).toMap(aroma.aromaId);
				return TransactionRepository({...request, prisma}).handleTransaction({
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
				const aromaInventory = await AromaInventoryRepository({...request, prisma}).list(prisma.aromaInventory.findMany({where}));
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
