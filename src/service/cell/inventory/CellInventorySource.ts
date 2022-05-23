import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellInventorySource, ICellInventorySourceCreate} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellInventorySource = (request: ICellInventorySourceCreate): ICellInventorySource => {
	const cellSource = singletonOf(() => CellSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<ICellInventorySource>({
			name: "cell-inventory",
			source: request.prisma.cellInventory,
			mapper: async cellTransaction => ({
				...cellTransaction,
				cell: await cellSource().toMap(cellTransaction.cellId),
				transaction: await transactionSource().toMap(cellTransaction.transactionId),
			}),
			create: async ({code, ...create}) => prisma.$transaction(async prisma => {
				const cell = await CellSource({...request, prisma}).toMap(create.cellId);
				return TransactionSource({...request, prisma}).handleTransaction({
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
				const cellInventory = await CellInventorySource({...request, prisma}).list(prisma.cellInventory.findMany({where}));
				await prisma.cellInventory.deleteMany({
					where,
				});
				return cellInventory;
			});
		},
	};
};
