import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellInventorySource = (): ICellInventorySource => {
	const cellSource = singletonOf(() => CellSource());
	const transactionSource = singletonOf(() => TransactionSource());

	const source: ICellInventorySource = Source<ICellInventorySource>({
		name: "cell-inventory",
		prisma,
		map: async cellTransaction => ({
			...cellTransaction,
			cell: await cellSource().mapper.map(cellTransaction.cell),
			transaction: await transactionSource().mapper.map(cellTransaction.transaction),
		}),
		source: {
			create: async ({code, ...create}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const cellSource = CellSource();
				const transactionSource = TransactionSource();
				cellSource.withPrisma(prisma);
				transactionSource.withPrisma(prisma);
				const cell = await cellSource.get(create.cellId);
				return transactionSource.handleTransaction({
					userId,
					cost: cell.cost,
					note: `Purchase of cell [${cell.vendor.name} ${cell.name}]`,
					callback: async transaction => prisma.cellInventory.create({
						data: {
							code: code || CodeService().code(),
							cellId: cell.id,
							transactionId: transaction.id,
							userId,
						},
						include: {
							cell: {
								include: {
									vendor: true,
									type: true,
								}
							},
							transaction: true,
						}
					}),
				});
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const cellInventory = await prisma.cellInventory.findMany({
						where,
						include: {
							cell: {
								include: {
									vendor: true,
									type: true,
								}
							},
							transaction: true,
						}
					});
					await prisma.cellInventory.deleteMany({
						where,
					});
					return cellInventory;
				});
			}
		},
	});

	return source;
};
