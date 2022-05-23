import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterInventorySource, IBoosterInventorySourceCreate} from "@/puff-smith/service/booster/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterInventorySource = (request: IBoosterInventorySourceCreate): IBoosterInventorySource => {
	const boosterSource = singletonOf(() => BoosterSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<IBoosterInventorySource>({
			name: "booster-inventory",
			source: request.prisma.boosterInventory,
			mapper: async boosterTransaction => ({
				...boosterTransaction,
				booster: await boosterSource().toMap(boosterTransaction.boosterId),
				transaction: await transactionSource().toMap(boosterTransaction.transactionId),
			}),
			create: async ({code, ...booster}) => prisma.$transaction(async prisma => {
				const $booster = await BoosterSource({...request, prisma}).toMap(booster.boosterId);
				return TransactionSource({...request, prisma}).handleTransaction({
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
				const boosterInventory = await BoosterInventorySource({...request, prisma}).list(prisma.boosterInventory.findMany({where}));
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
