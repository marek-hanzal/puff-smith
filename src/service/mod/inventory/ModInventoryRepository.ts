import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModTransactionRepository, IModTransactionRepositoryCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModRepository} from "@/puff-smith/service/mod/ModRepository";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModInventoryRepository = (request: IModTransactionRepositoryCreate): IModTransactionRepository => {
	const modRepository = singletonOf(() => ModRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IModTransactionRepository>({
			name: "mod-inventory",
			source: request.prisma.modInventory,
			mapper: async modTransaction => ({
				...modTransaction,
				mod: await modRepository().toMap(modTransaction.modId),
				transaction: await transactionRepository().toMap(modTransaction.transactionId),
			}),
			create: async ({code, ...mod}) => prisma.$transaction(async prisma => {
				const $mod = await ModRepository({...request, prisma}).toMap(mod.modId);
				return TransactionRepository({...request, prisma}).handleTransaction({
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
		}),
		handleDelete: async ({request: {ids}}) => {
			const where = {
				id: {
					in: ids,
				},
				userId: userId(),
			};
			return prisma.$transaction(async prisma => {
				const modInventory = await ModInventoryRepository({...request, prisma}).list(prisma.modInventory.findMany({where}));
				await prisma.modInventory.deleteMany({
					where,
				});
				return modInventory;
			});
		},
	};
};
