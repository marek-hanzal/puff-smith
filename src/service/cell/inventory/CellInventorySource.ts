import {CellSource} from "@/puff-smith/service/cell/CellSource";
import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CellInventorySource = (): ICellInventorySource => {
	const cellSource = singletonOf(() => CellSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));

	const source: ICellInventorySource = Source<ICellInventorySource>({
		name: "cell.inventory",
		prisma,
		map: async cellInventory => ({
			...cellInventory,
			cell: await cellSource().map(cellInventory.cell),
			transaction: await transactionSource().mapNull(cellInventory.transaction),
		}),
		source: {
			get: async id => source.prisma.cellInventory.findUniqueOrThrow({
				where: {id},
				include: {
					cell: {
						include: {
							vendor: true,
							type: true,
						}
					},
					transaction: true,
				},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.cellInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.cellInventory.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					cell: {
						include: {
							vendor: true,
							type: true,
						}
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...create}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const transactionSource = TransactionSource().ofSource(source).withPrisma(prisma);
				const cell = await CellSource().ofSource(source).withPrisma(prisma).get(create.cellId);
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
						},
					}),
				});
			}),
			patch: async patch => {
				return source.prisma.cellInventory.update({
					where: {id: patch.id},
					data: patch,
					include: {
						cell: {
							include: {
								vendor: true,
								type: true,
							}
						},
						transaction: true,
					},
				});
			},
			remove: async ids => {
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
