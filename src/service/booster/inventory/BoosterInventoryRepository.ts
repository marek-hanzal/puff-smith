import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {IBoosterInventoryRepository, IBoosterInventoryRepositoryCreate} from "@/puff-smith/service/booster/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterInventoryRepository = (request: IBoosterInventoryRepositoryCreate): IBoosterInventoryRepository => {
	const boosterRepository = singletonOf(() => BoosterRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IBoosterInventoryRepository>({
			name: "booster-inventory",
			source: request.prisma.boosterInventory,
			mapper: async boosterTransaction => ({
				...boosterTransaction,
				booster: await boosterRepository().toMap(boosterTransaction.boosterId),
				transaction: await transactionRepository().toMap(boosterTransaction.transactionId),
			}),
			create: async ({code, ...booster}) => prisma.$transaction(async prisma => {
				const $booster = await BoosterRepository({...request, prisma}).toMap(booster.boosterId);
				return TransactionRepository({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: $booster.cost,
					note: `Purchase of booster [${$booster.vendor.name} ${$booster.name}]`,
					callback: async transaction => {
						const $boosterInventory = prisma.boosterInventory.create({
							data: {
								code: code || codeService().code(),
								boosterId: $booster.id,
								transactionId: transaction.id,
								userId: userId(),
							}
						});
						await MixtureUserJob.async({userId: userId()}, userId());
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
				userId: userId(),
			};
			return prisma.$transaction(async prisma => {
				const boosterInventory = await BoosterInventoryRepository({...request, prisma}).list(prisma.boosterInventory.findMany({where}));
				await prisma.boosterInventory.deleteMany({
					where,
				});
				await prisma.mixtureInventory.deleteMany({
					where: {
						boosterId: {
							in: boosterInventory.map(item => item.boosterId),
						},
						userId: userId(),
					}
				});
				return boosterInventory;
			});
		}
	};
};
