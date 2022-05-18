import {defaults} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICottonInventoryService, ICottonInventoryServiceCreate} from "@/puff-smith/service/cotton/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CottonInventoryService = (request: ICottonInventoryServiceCreate = defaults()): ICottonInventoryService => {
	const cottonService = singletonOf(() => CottonService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...RepositoryService<ICottonInventoryService>({
			name: "cotton-inventory",
			source: request.prisma.cottonInventory,
			mapper: async cottonTransaction => ({
				...cottonTransaction,
				cotton: await cottonService().toMap(cottonTransaction.cottonId),
				transaction: await transactionService().toMap(cottonTransaction.transactionId),
			}),
			create: async ({code, ...cotton}) => prisma.$transaction(async prisma => {
				const $cotton = await CottonService({...request, prisma}).toMap(cotton.cottonId);
				return TransactionService({...request, prisma}).handleTransaction({
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
