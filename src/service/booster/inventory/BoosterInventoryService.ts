import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBoosterInventoryService, IBoosterInventoryServiceCreate} from "@/puff-smith/service/booster/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const BoosterInventoryService = (request: IBoosterInventoryServiceCreate = ServiceCreate()): IBoosterInventoryService => {
	const boosterService = singletonOf(() => BoosterService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = request.userService.getUserId();

	return {
		...RepositoryService<IBoosterInventoryService>({
			name: "booster-inventory",
			source: request.prisma.boosterInventory,
			mapper: async boosterTransaction => ({
				...boosterTransaction,
				booster: await boosterService().toMap(boosterTransaction.boosterId),
				transaction: await transactionService().toMap(boosterTransaction.transactionId),
			}),
			create: async ({code, ...booster}) => prisma.$transaction(async prisma => {
				const $booster = await BoosterService({...request, prisma}).toMap(booster.boosterId);
				return TransactionService({...request, prisma}).handleTransaction({
					userId,
					cost: $booster.cost,
					note: `Purchase of booster [${$booster.vendor.name} ${$booster.name}]`,
					callback: async transaction => {
						const $boosterInventory = prisma.boosterInventory.create({
							data: {
								code: code || codeService().code(),
								boosterId: $booster.id,
								transactionId: transaction.id,
								userId,
							}
						});
						await MixtureUserJob.async({userId}, userId);
						return $boosterInventory;
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
				const boosterInventory = await BoosterInventoryService({...request, prisma}).list(prisma.boosterInventory.findMany({where}));
				await prisma.boosterInventory.deleteMany({
					where,
				});
				await prisma.mixtureInventory.deleteMany({
					where: {
						boosterId: {
							in: boosterInventory.map(item => item.boosterId),
						},
						userId,
					}
				});
				return boosterInventory;
			});
		}
	};
};
