import {CellRepository} from "@/puff-smith/service/cell/CellRepository";
import {ICellInventoryRepository, ICellInventoryRepositoryCreate} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellInventoryRepository = (request: ICellInventoryRepositoryCreate): ICellInventoryRepository => {
	const cellRepository = singletonOf(() => CellRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<ICellInventoryRepository>({
			name: "cell-inventory",
			source: request.prisma.cellInventory,
			mapper: async cellTransaction => ({
				...cellTransaction,
				cell: await cellRepository().toMap(cellTransaction.cellId),
				transaction: await transactionRepository().toMap(cellTransaction.transactionId),
			}),
			create: async ({code, ...create}) => prisma.$transaction(async prisma => {
				const cell = await CellRepository({...request, prisma}).toMap(create.cellId);
				return TransactionRepository({...request, prisma}).handleTransaction({
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
				const cellInventory = await CellInventoryRepository({...request, prisma}).list(prisma.cellInventory.findMany({where}));
				await prisma.cellInventory.deleteMany({
					where,
				});
				return cellInventory;
			});
		},
	};
};
