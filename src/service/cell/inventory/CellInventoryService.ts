import {defaults} from "@/puff-smith/service";
import {CellService} from "@/puff-smith/service/cell/CellService";
import {ICellInventoryService, ICellInventoryServiceCreate} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CellInventoryService = (request: ICellInventoryServiceCreate = defaults()): ICellInventoryService => {
	const cellService = singletonOf(() => CellService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const userId = request.userService.getUserId();

	return RepositoryService<ICellInventoryService>({
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
				userId,
				cost: cell.cost,
				note: `Purchase of cell [${cell.vendor.name} ${cell.name}]`,
				callback: async transaction => prisma.cellInventory.create({
					data: {
						code: code || CodeService().code(),
						cellId: cell.id,
						transactionId: transaction.id,
						userId,
					}
				}),
			});
		}),
	});
};
