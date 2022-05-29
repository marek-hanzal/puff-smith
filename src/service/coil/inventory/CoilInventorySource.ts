import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilInventorySource} from "@/puff-smith/service/coil/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CoilInventorySource = (): ICoilInventorySource => {
	const coilSource = singletonOf(() => CoilSource());

	const source: ICoilInventorySource = Source<ICoilInventorySource>({
		name: "coil.inventory",
		prisma,
		map: async coilInventory => coilInventory ? ({
			...coilInventory,
			coil: await coilSource().mapper.map(coilInventory.coil),
		}) : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.coilInventory.count({
				where: merge(filter, {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.coilInventory.findMany({
				where: merge(filter, {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					coil: {
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
							CoilDraw: {
								include: {
									draw: true,
								},
							},
						}
					},
				},
				...pageOf(query),
			}),
			create: async ({...create}) => {
				const userId = source.user.required();
				const coilSource = CoilSource();
				const coil = await coilSource.get(create.coilId);
				try {
					return source.prisma.coilInventory.create({
						data: {
							name: coil.name,
							coilId: coil.id,
							wireId: coil.wireId,
							userId,
						},
						include: {
							coil: {
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
									CoilDraw: {
										include: {
											draw: true,
										},
									},
								}
							},
						},
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.coilInventory.findUnique({
						where: {
							coilId_userId: {
								userId: source.user.required(),
								coilId: create.coilId,
							},
						},
						include: {
							coil: {
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
									CoilDraw: {
										include: {
											draw: true,
										},
									},
								}
							},
						},
						rejectOnNotFound: true,
					}));
				}
			},
		},
	});

	return source;
};
