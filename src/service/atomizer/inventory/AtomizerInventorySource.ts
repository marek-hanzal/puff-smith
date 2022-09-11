import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AtomizerInventorySource = (): IAtomizerInventorySource => {
	const atomizerSource = singletonOf(() => AtomizerSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IAtomizerInventorySource = Source<IAtomizerInventorySource>({
		name: "atomizer.inventory",
		prisma: prisma,
		map: async atomizerInventory => atomizerInventory ? {
			...atomizerInventory,
			atomizer: await atomizerSource().mapper.map(atomizerInventory.atomizer),
			transaction: await transactionSource().map(atomizerInventory.transaction),
		} : null,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.atomizerInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.atomizerInventory.findMany({
				where: merge(filter, {
					atomizer: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								}
							}
						],

					},
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					atomizer: {
						include: {
							vendor: true,
							AtomizerDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								}
							}
						}
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, atomizerId}) => prisma.$transaction(async prisma => {
				const $atomizer = await AtomizerSource().ofSource(source).withPrisma(prisma).get(atomizerId);
				const transactionSource = TransactionSource().ofSource(source).withPrisma(prisma);
				return transactionSource.handleTransaction({
					userId: source.user.required(),
					cost: $atomizer.cost,
					note: `Purchase of atomizer [${$atomizer.vendor.name} ${$atomizer.name}]`,
					callback: async transaction => prisma.atomizerInventory.create({
						data: {
							code: code || codeService().code(),
							atomizerId: $atomizer.id,
							transactionId: transaction.id,
							userId: source.user.required(),
						},
						include: {
							atomizer: {
								include: {
									vendor: true,
									AtomizerDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								}
							},
							transaction: true,
						},
					}),
				});
			}),
			patch: async patch => {
				return source.prisma.atomizerInventory.update({
					where: {id: patch.id},
					data: patch,
					include: {
						atomizer: {
							include: {
								vendor: true,
								AtomizerDraw: {
									orderBy: {draw: {sort: "asc"}},
									include: {
										draw: true,
									}
								}
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
					const atomizerInventory = await prisma.atomizerInventory.findMany({
						where,
						include: {
							atomizer: {
								include: {
									vendor: true,
									AtomizerDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								}
							},
							transaction: true,
						}
					});
					await prisma.atomizerInventory.deleteMany({
						where,
					});
					return atomizerInventory;
				});
			}
		}
	});

	return source;
};
