import {CodeService} from "@/puff-smith/service/code/CodeService";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CottonInventorySource = (): ICottonInventorySource => {
	const cottonSource = singletonOf(() => CottonSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ICottonInventorySource = Source<ICottonInventorySource>({
		name: "cotton.inventory",
		prisma,
		map: async cottonInventory => ({
			...cottonInventory,
			cotton: await cottonSource().map(cottonInventory.cotton),
			transaction: await transactionSource().mapNull(cottonInventory.transaction),
		}),
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.cottonInventory.count({
				where: merge(filter, {
					cotton: {
						OR: fulltext ? [
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
								},
							}
						] : undefined,
					},
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.cottonInventory.findMany({
				where: merge(filter, {
					cotton: {
						OR: fulltext ? [
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
								},
							}
						] : undefined,
					},
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					cotton: {
						include: {
							vendor: true,
							CottonDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								}
							}
						},
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...cotton}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const transactionSource = TransactionSource().ofSource(source).withPrisma(prisma);
				const $cotton = await CottonSource().ofSource(source).withPrisma(prisma).get(cotton.cottonId);
				return transactionSource.handleTransaction({
					userId,
					cost: $cotton.cost,
					note: `Purchase of cotton [${$cotton.vendor.name} ${$cotton.name}]`,
					callback: async transaction => prisma.cottonInventory.create({
						data: {
							code: code || codeService().code(),
							cottonId: $cotton.id,
							transactionId: transaction.id,
							userId,
						},
						include: {
							cotton: {
								include: {
									vendor: true,
									CottonDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								},
							},
							transaction: true,
						},
					}),
				});
			}),
			patch: async patch => {
				return source.prisma.cottonInventory.update({
					where: {id: patch.id},
					data: patch,
					include: {
						cotton: {
							include: {
								vendor: true,
								CottonDraw: {
									orderBy: {draw: {sort: "asc"}},
									include: {
										draw: true,
									}
								}
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
					const cottonInventory = await prisma.cottonInventory.findMany({
						where,
						include: {
							cotton: {
								include: {
									vendor: true,
									CottonDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								},
							},
							transaction: true,
						},
					});
					await prisma.cottonInventory.deleteMany({
						where,
					});
					return cottonInventory;
				});
			},
		}
	});

	return source;
};
