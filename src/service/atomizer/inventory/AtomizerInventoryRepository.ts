import {AtomizerRepository} from "@/puff-smith/service/atomizer/AtomizerRepository";
import {IAtomizerInventoryRepositoryCreate, IAtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerInventoryRepository = (request: IAtomizerInventoryRepositoryCreate): IAtomizerInventoryService => {
	const atomizerRepository = singletonOf(() => AtomizerRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return Repository<IAtomizerInventoryService>({
		name: "atomizer-inventory",
		source: request.prisma.atomizerInventory,
		mapper: async atomizerInventory => ({
			...atomizerInventory,
			atomizer: await atomizerRepository().toMap(atomizerInventory.atomizerId),
			transaction: await transactionRepository().toMap(atomizerInventory.transactionId),
		}),
		create: async ({code, ...atomizer}) => prisma.$transaction(async prisma => {
			const $atomizer = await AtomizerRepository({...request, prisma}).toMap(atomizer.atomizerId);
			return TransactionRepository({...request, prisma}).handleTransaction({
				userId: userId(),
				cost: $atomizer.cost,
				note: `Purchase of atomizer [${$atomizer.vendor.name} ${$atomizer.name}]`,
				callback: async transaction => prisma.atomizerInventory.create({
					data: {
						code: code || codeService().code(),
						atomizerId: $atomizer.id,
						transactionId: transaction.id,
						userId: userId(),
					}
				}),
			});
		}),
	});
};
