import {MixtureUserJob} from "@/puff-smith/cli/jobs/mixture";
import {ServiceCreate} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBoosterInventoryService, IBoosterInventoryServiceCreate} from "@/puff-smith/service/booster/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const BoosterInventoryService = (request: IBoosterInventoryServiceCreate = ServiceCreate()): IBoosterInventoryService => RepositoryService<IBoosterInventoryService>({
	name: "booster-inventory",
	source: request.prisma.boosterInventory,
	mapper: async boosterTransaction => ({
		...boosterTransaction,
		booster: await BoosterService(request).toMap(boosterTransaction.boosterId),
		transaction: await TransactionService(request).toMap(boosterTransaction.transactionId),
	}),
	create: async create => prisma.$transaction(async prisma => {
		const booster = await BoosterService({...request, prisma}).toMap(create.boosterId);
		return TransactionService({...request, prisma}).handleTransaction({
			userId: request.userService.getUserId(),
			cost: booster.cost,
			note: `Purchase of booster [${booster.vendor.name} ${booster.name}]`,
			callback: async transaction => {
				const $boosterInventory = prisma.boosterInventory.create({
					data: {
						boosterId: booster.id,
						transactionId: transaction.id,
						userId: request.userService.getUserId(),
					}
				});
				await MixtureUserJob.schedule({userId: request.userService.getUserId()});
				return $boosterInventory;
			},
		});
	}),
});
