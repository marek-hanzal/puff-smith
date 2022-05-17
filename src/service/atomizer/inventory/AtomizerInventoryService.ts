import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizerInventoryService, IAtomizerInventoryServiceCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const AtomizerInventoryService = (request: IAtomizerInventoryServiceCreate) => {
	const atomizerService = singletonOf(() => AtomizerService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = request.userService.getUserId();

	return RepositoryService<IAtomizerInventoryService>({
		name: "atomizer-inventory",
		source: request.prisma.atomizerInventory,
		mapper: async atomizerInventory => ({
			...atomizerInventory,
			atomizer: await atomizerService().toMap(atomizerInventory.atomizerId),
			transaction: await transactionService().toMap(atomizerInventory.transactionId),
		}),
		create: async ({code, ...atomizer}) => prisma.$transaction(async prisma => {
			const $atomizer = await AtomizerService({...request, prisma}).toMap(atomizer.atomizerId);
			return TransactionService({...request, prisma}).handleTransaction({
				userId,
				cost: $atomizer.cost,
				note: `Purchase of atomizer [${$atomizer.vendor.name} ${$atomizer.name}]`,
				callback: async transaction => prisma.atomizerInventory.create({
					data: {
						code: code || codeService().code(),
						atomizerId: $atomizer.id,
						transactionId: transaction.id,
						userId,
					}
				}),
			});
		}),
	});
};
