import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {IBaseInventoryRepository, IBaseInventoryRepositoryCreate} from "@/puff-smith/service/base/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseInventoryRepository = (request: IBaseInventoryRepositoryCreate): IBaseInventoryRepository => {
	const baseRepository = singletonOf(() => BaseRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IBaseInventoryRepository>({
			name: "base-inventory",
			source: request.prisma.baseInventory,
			mapper: async baseTransaction => ({
				...baseTransaction,
				base: await baseRepository().toMap(baseTransaction.baseId),
				transaction: await transactionRepository().toMap(baseTransaction.transactionId),
			}),
			create: async ({code, ...base}) => prisma.$transaction(async prisma => {
				const $base = await BaseRepository({...request, prisma}).toMap(base.baseId);
				return TransactionRepository({...request, prisma}).handleTransaction({
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
				const baseInventory = await BaseInventoryRepository({...request, prisma}).list(prisma.baseInventory.findMany({where}));
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
