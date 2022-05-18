import {CellService} from "@/puff-smith/service/cell/CellService";
import {ICellInventoryService, ICellInventoryServiceCreate} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CellInventoryService = (request: ICellInventoryServiceCreate): ICellInventoryService => {
	const cellService = singletonOf(() => CellService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...RepositoryService<ICellInventoryService>({
			name: "cell-inventory",
			source: request.prisma.cellInventory,
			mapper: async cellTransaction => ({
				...cellTransaction,
				cell: await cellService().toMap(cellTransaction.cellId),
				transaction: await transactionService().toMap(cellTransaction.transactionId),
			}),
			create: async ({code, ...create}) => prisma.$transaction(async prisma => {
				const cell = await CellService({...request, prisma}).toMap(create.cellId);
				return TransactionService({...request, prisma}).handleTransaction({
					userId: userId(),
					cost: cell.cost,
					note: `Purchase of cell [${cell.vendor.name} ${cell.name}]`,
					callback: async transaction => prisma.cellInventory.create({
						data: {
							code: code || CodeService().code(),
							cellId: cell.id,
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
				const cellInventory = await CellInventoryService({...request, prisma}).list(prisma.cellInventory.findMany({where}));
				await prisma.cellInventory.deleteMany({
					where,
				});
				return cellInventory;
			});
		},
	};
};
