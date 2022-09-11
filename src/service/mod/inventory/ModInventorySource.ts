import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const ModInventorySource = (): IModInventorySource => {
	const modSource = singletonOf(() => ModSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IModInventorySource = Source<IModInventorySource>({
		name: "mod.inventory",
		prisma,
		map: async modInventory => modInventory ? {
			...modInventory,
			mod: await modSource().mapper.map(modInventory.mod),
			transaction: await transactionSource().mapper.map(modInventory.transaction),
		} : null,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.modInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.modInventory.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					mod: {
						include: {
							vendor: true,
							ModCell: {
								include: {
									cell: true,
								}
							},
						},
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...mod}) => prisma.$transaction(async prisma => {
				const $mod = await ModSource().ofSource(source).withPrisma(prisma).get(mod.modId);
				return TransactionSource().ofSource(source).withPrisma(prisma).handleTransaction({
					userId: source.user.required(),
					cost: $mod.cost,
					note: `Purchase of mod [${$mod.vendor.name} ${$mod.name}]`,
					callback: async transaction => prisma.modInventory.create({
						data: {
							code: code || codeService().code(),
							modId: $mod.id,
							transactionId: transaction.id,
							userId: source.user.required(),
						},
						include: {
							mod: {
								include: {
									vendor: true,
									ModCell: {
										include: {
											cell: true,
										}
									},
								},
							},
							transaction: true,
						},
					}),
				});
			}),
			patch: async patch => {
				return source.prisma.modInventory.update({
					where: {id: patch.id},
					data: patch,
					include: {
						mod: {
							include: {
								vendor: true,
								ModCell: {
									include: {
										cell: true,
									}
								},
							},
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
					const modInventory = prisma.modInventory.findMany({
						where,
						include: {
							mod: {
								include: {
									vendor: true,
									ModCell: {
										include: {
											cell: true,
										}
									},
								},
							},
							transaction: true,
						}
					});
					await prisma.modInventory.deleteMany({
						where,
					});
					return modInventory;
				});
			},
		}
	});

	return source;
};
