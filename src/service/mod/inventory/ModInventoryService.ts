import {defaults} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModTransactionService, IModTransactionServiceCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModService} from "@/puff-smith/service/mod/ModService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const ModInventoryService = (request: IModTransactionServiceCreate = defaults()): IModTransactionService => {
	const modService = singletonOf(() => ModService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return RepositoryService<IModTransactionService>({
		name: "mod-inventory",
		source: request.prisma.modInventory,
		mapper: async modTransaction => ({
			...modTransaction,
			mod: await modService().toMap(modTransaction.modId),
			transaction: await transactionService().toMap(modTransaction.transactionId),
		}),
		create: async ({code, ...mod}) => prisma.$transaction(async prisma => {
			const $mod = await ModService({...request, prisma}).toMap(mod.modId);
			return TransactionService({...request, prisma}).handleTransaction({
				userId: userId(),
				cost: $mod.cost,
				note: `Purchase of mod [${$mod.vendor.name} ${$mod.name}]`,
				callback: async transaction => prisma.modInventory.create({
					data: {
						code: code || codeService().code(),
						modId: $mod.id,
						transactionId: transaction.id,
						userId: userId(),
					}
				}),
			});
		}),
	});
};
