import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BuildSource = (): IBuildSource => {
	const cottonSource = singletonOf(() => CottonSource().ofSource(source));
	const atomizerSource = singletonOf(() => AtomizerSource().ofSource(source));
	const coilSource = singletonOf(() => CoilSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());
	const ohmService = singletonOf(() => OhmService());

	const source: IBuildSource = Source<IBuildSource>({
		name: "build",
		prisma,
		map: async build => ({
			...build,
			created: build.created.toUTCString(),
			ohm: build.ohm.toNumber(),
			atomizer: await atomizerSource().map(build.atomizer),
			coil: await coilSource().map(build.coil),
			cotton: await cottonSource().map(build.cotton),
		}),
		source: {
			get: async id => source.prisma.build.findUniqueOrThrow({
				where: {id},
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
						},
					},
					coil: {
						include: {
							CoilDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								}
							},
							wire: {
								include: {
									vendor: true,
									WireFiber: {
										include: {
											fiber: {
												include: {
													material: true,
												}
											}
										}
									},
									WireDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								}
							}
						}
					},
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
				},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.build.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.build.findMany({
				where: merge(filter, {
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
						},
					},
					coil: {
						include: {
							CoilDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								}
							},
							wire: {
								include: {
									vendor: true,
									WireFiber: {
										include: {
											fiber: {
												include: {
													material: true,
												}
											}
										}
									},
									WireDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								}
							}
						}
					},
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
				},
				...pageOf(query),
			}),
			create: async ({code, created, archive, ...build}) => prisma.$transaction(prisma => {
				const userId = source.user.required();
				const tariffSource = TariffSource().ofSource(source).withPrisma(prisma);
				return tariffSource.transactionOf({
					tariff: "default",
					userId,
					price: "lab.build.create",
					note: "New build",
					callback: async (_, transaction) => {
						if (archive) {
							const $builds = await prisma.build.findMany({
								where: {
									atomizerId: build.atomizerId,
									userId: source.user.required(),
								},
							});
							for (const {id} of $builds) {
								await prisma.build.update({
									where: {id},
									data: {
										active: false,
									},
								});
							}
						}
						const drain = ohmService().toAmps(3.7, build.ohm);
						const watts = ohmService().toWatt(3.7, drain);
						return prisma.build.create({
							data: {
								...build,
								active: true,
								created: created || new Date(),
								code: code || codeService().code(),
								userId: source.user.required(),
								transactionId: transaction.id,
								drain,
								watts,
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
									},
								},
								coil: {
									include: {
										CoilDraw: {
											orderBy: {draw: {sort: "asc"}},
											include: {
												draw: true,
											}
										},
										wire: {
											include: {
												vendor: true,
												WireFiber: {
													include: {
														fiber: {
															include: {
																material: true,
															}
														}
													}
												},
												WireDraw: {
													orderBy: {draw: {sort: "asc"}},
													include: {
														draw: true,
													}
												}
											}
										}
									}
								},
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
							},
						});
					}
				});
			}),
			patch: async patch => {
				const drain = patch.ohm ? ohmService().toAmps(3.7, patch.ohm) : undefined;
				const watts = drain ? ohmService().toWatt(3.7, drain) : undefined;
				return source.prisma.build.update({
					where: {id: patch.id},
					data: {
						...patch,
						active: patch?.active,
						created: undefined,
						drain,
						watts,
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
							},
						},
						coil: {
							include: {
								CoilDraw: {
									orderBy: {draw: {sort: "asc"}},
									include: {
										draw: true,
									}
								},
								wire: {
									include: {
										vendor: true,
										WireFiber: {
											include: {
												fiber: {
													include: {
														material: true,
													}
												}
											}
										},
										WireDraw: {
											orderBy: {draw: {sort: "asc"}},
											include: {
												draw: true,
											}
										}
									}
								}
							}
						},
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
					const items = await prisma.build.findMany({
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
								},
							},
							coil: {
								include: {
									CoilDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									},
									wire: {
										include: {
											vendor: true,
											WireFiber: {
												include: {
													fiber: {
														include: {
															material: true,
														}
													}
												}
											},
											WireDraw: {
												orderBy: {draw: {sort: "asc"}},
												include: {
													draw: true,
												}
											}
										}
									}
								}
							},
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
						},
					});
					await prisma.build.deleteMany({
						where,
					});
					return items;
				});
			}
		}
	});

	return source;
};

