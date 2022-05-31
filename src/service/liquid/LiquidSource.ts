import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LiquidSource = (): ILiquidSource => {
	const transactionSource = singletonOf(() => TransactionSource());
	const mixtureSource = singletonOf(() => MixtureSource());

	const source: ILiquidSource = Source<ILiquidSource>({
		name: "liquid",
		prisma,
		map: async liquid => liquid ? {
			...liquid,
			created: liquid.created.toUTCString(),
			mixed: liquid.mixed.toUTCString(),
			transaction: await transactionSource().mapper.map(liquid.transaction),
			mixture: await mixtureSource().mapper.map(liquid.mixture),
		} : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.liquid.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.liquid.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				include: {
					vendor: true,
					transaction: true,
					mixture: {
						include: {
							aroma: {
								include: {
									vendor: true,
									AromaTaste: {
										orderBy: {taste: {sort: "asc"}},
										include: {
											taste: true,
										}
									}
								},
							},
							base: {
								include: {
									vendor: true,
								},
							},
							booster: {
								include: {
									vendor: true,
								},
							},
							MixtureDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								},
							},
						}
					}
				},
				...pageOf(query),
			}),
			create: async ({code, mixed, ...liquid}) => prisma.$transaction(prisma => {
				const userId = source.user.required();
				const tariffSource = TariffSource().withPrisma(prisma);

				return tariffSource.transactionOf({
					tariff: "default",
					userId,
					price: "lab.liquid.create",
					note: "New liquid",
					callback: async (_, transaction) => {
						const $mixture = await prisma.mixture.findUnique({
							where: {
								id: liquid.mixtureId,
							},
							rejectOnNotFound: true,
						});
						return prisma.liquid.create({
							data: {
								...liquid,
								userId,
								aromaId: $mixture.aromaId,
								vendorId: $mixture.vendorId,
								boosterId: $mixture.boosterId,
								baseId: $mixture.baseId,
								code: code || CodeService().code(),
								transactionId: transaction.id,
								created: new Date(),
								mixed: mixed || new Date(),
							},
							include: {
								vendor: true,
								transaction: true,
								mixture: {
									include: {
										aroma: {
											include: {
												vendor: true,
												AromaTaste: {
													orderBy: {taste: {sort: "asc"}},
													include: {
														taste: true,
													}
												}
											},
										},
										base: {
											include: {
												vendor: true,
											},
										},
										booster: {
											include: {
												vendor: true,
											},
										},
										MixtureDraw: {
											orderBy: {draw: {sort: "asc"}},
											include: {
												draw: true,
											},
										},
									}
								}
							},
						});
					}
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
					const liquids = await prisma.liquid.findMany({
						where,
						include: {
							vendor: true,
							transaction: true,
							mixture: {
								include: {
									aroma: {
										include: {
											vendor: true,
											AromaTaste: {
												orderBy: {taste: {sort: "asc"}},
												include: {
													taste: true,
												}
											}
										},
									},
									base: {
										include: {
											vendor: true,
										},
									},
									booster: {
										include: {
											vendor: true,
										},
									},
									MixtureDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										},
									},
								}
							}
						},
					});
					await prisma.liquid.deleteMany({
						where,
					});
					return liquids;
				});
			}
		}
	});

	return source;
};
