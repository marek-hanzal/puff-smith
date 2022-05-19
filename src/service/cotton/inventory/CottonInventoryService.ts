import {defaults} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {CottonRepository} from "@/puff-smith/service/cotton/CottonRepository";
import {ICottonInventoryService, ICottonInventoryServiceCreate} from "@/puff-smith/service/cotton/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonInventoryService = (request: ICottonInventoryServiceCreate = defaults()): ICottonInventoryService => {
	const cottonService = singletonOf(() => CottonRepository(request));
	const transactionService = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<ICottonInventoryService>({
			name: "cotton-inventory",
			source: request.prisma.cottonInventory,
			mapper: async cottonTransaction => ({
				...cottonTransaction,
				cotton: await cottonService().toMap(cottonTransaction.cottonId),
				transaction: await transactionService().toMap(cottonTransaction.transactionId),
			}),
			create: async ({code, ...cotton}) => prisma.$transaction(async prisma => {
				const $cotton = await CottonRepository({...request, prisma}).toMap(cotton.cottonId);
				return TransactionRepository({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: $cotton.cost,
					note: `Purchase of cotton [${$cotton.vendor.name} ${$cotton.name}]`,
					callback: async transaction => prisma.cottonInventory.create({
						data: {
							code: code || codeService().code(),
							cottonId: $cotton.id,
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
				const cottonInventory = await CottonInventoryService({...request, prisma}).list(prisma.cottonInventory.findMany({where}));
				await prisma.cottonInventory.deleteMany({
					where,
				});
				return cottonInventory;
			});
		},
	};
};
