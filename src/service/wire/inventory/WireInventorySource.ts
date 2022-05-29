import {CoilUserJob} from "@/puff-smith/jobs/coil/job";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {WireSource} from "@/puff-smith/service/wire/WireSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const WireInventorySource = (): IWireInventorySource => {
	const wireSource = singletonOf(() => WireSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: IWireInventorySource = Source<IWireInventorySource>({
		name: "wire.inventory",
		prisma,
		map: async wireInventory => wireInventory ? ({
			...wireInventory,
			wire: await wireSource().mapper.map(wireInventory.wire),
			transaction: await transactionSource().mapper.map(wireInventory.transaction),
		}) : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wireInventory.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.wireInventory.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					wire: {
						include: {
							vendor: true,
							WireDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								},
							},
							WireFiber: {
								include: {
									fiber: {
										include: {
											material: true,
										}
									}
								}
							}
						},
					},
					transaction: true,
				},
				...pageOf(query),
			}),
			create: async ({code, ...wireInventory}) => prisma.$transaction(async prisma => {
				const wire = await WireSource().withPrisma(prisma).get(wireInventory.wireId);
				return TransactionSource().withPrisma(prisma).handleTransaction({
					userId: source.user.required(),
					cost: wire.cost,
					note: `Purchase of wire [${wire.vendor.name} ${wire.name}]`,
					callback: async transaction => {
						const $wire = prisma.wireInventory.create({
							data: {
								code: code || codeService().code(),
								wireId: wire.id,
								transactionId: transaction.id,
								userId: source.user.required(),
							},
							include: {
								wire: {
									include: {
										vendor: true,
										WireDraw: {
											orderBy: {draw: {sort: "asc"}},
											include: {
												draw: true,
											},
										},
										WireFiber: {
											include: {
												fiber: {
													include: {
														material: true,
													}
												}
											}
										}
									},
								},
								transaction: true,
							},
						});
						await CoilUserJob.async({}, source.user.required());
						return $wire;
					},
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
					const wireInventorySource = await prisma.wireInventory.findMany({
						where,
						include: {
							wire: {
								include: {
									vendor: true,
									WireDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										},
									},
									WireFiber: {
										include: {
											fiber: {
												include: {
													material: true,
												}
											}
										}
									}
								},
							},
							transaction: true,
						}
					});
					await prisma.wireInventory.deleteMany({
						where,
					});
					await prisma.coilInventory.deleteMany({
						where: {
							wireId: {
								in: wireInventorySource.map(item => item.wireId),
							},
							userId: source.user.required(),
						}
					});
					return wireInventorySource;
				});
			},
		}
	});

	return source;
};
