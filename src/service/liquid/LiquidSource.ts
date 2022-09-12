import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {MixtureJobSource} from "@/puff-smith/service/mixture/job/MixtureJobSource";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import {toMixtureInfo} from "@/puff-smith/service/mixture/utils";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {ClientError} from "@leight-core/api";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LiquidSource = (): ILiquidSource => {
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const mixtureSource = singletonOf(() => MixtureSource().ofSource(source));
	const mixtureJobSource = singletonOf(() => MixtureJobSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ILiquidSource = Source<ILiquidSource>({
		name: "liquid",
		prisma,
		map: async liquid => ({
			...liquid,
			created: liquid.created.toUTCString(),
			mixed: liquid.mixed.toUTCString(),
			transaction: await transactionSource().map(liquid.transaction),
			mixture: await mixtureSource().map(liquid.mixture),
		}),
		source: {
			get: async id => source.prisma.liquid.findUniqueOrThrow({
				where: {id},
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
			}),
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
				return TariffSource().ofSource(source).withPrisma(prisma).transactionOf({
					tariff: "default",
					userId,
					price: "lab.liquid.create",
					note: "New liquid",
					callback: async (_, transaction) => {
						const $mixture = await prisma.mixture.findUniqueOrThrow({
							where: {
								id: liquid.mixtureId,
							},
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
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const items = await prisma.liquid.findMany({
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
					return items;
				});
			}
		},
		standalone: async ({aromaId, boosterId, baseId, code, mixed, nicotine}) => {
			const $aromaInventory = await source.prisma.aromaInventory.findFirstOrThrow({
				where: {aromaId},
				include: {
					aroma: true,
				}
			});
			const $aroma = $aromaInventory.aroma;
			const $booster = boosterId ? await source.prisma.booster.findFirstOrThrow({
				where: {id: boosterId},
			}) : undefined;
			const $base = baseId ? await source.prisma.base.findFirstOrThrow({
				where: {id: baseId},
			}) : undefined;
			$booster?.id && await source.prisma.boosterInventory.createMany({
				data: [{
					code: codeService().code(),
					boosterId: $booster.id,
					userId: source.user.required(),
				}],
				skipDuplicates: true,
			});
			const $boosterInventory = $booster?.id ? await source.prisma.boosterInventory.findFirstOrThrow({
				where: {
					boosterId: $booster.id,
					userId: source.user.required(),
				},
			}) : undefined;
			$base?.id ? await source.prisma.baseInventory.createMany({
				data: [{
					code: codeService().code(),
					baseId: $base.id,
					userId: source.user.required(),
				}],
				skipDuplicates: true,
			}) : undefined;
			const $baseInventory = $base?.id ? await source.prisma.baseInventory.findFirstOrThrow({
				where: {
					baseId: $base.id,
					userId: source.user.required(),
				},
			}) : undefined;
			const $info = toMixtureInfo({
				aroma: $aroma,
				booster: $booster,
				base: $base,
				nicotine,
			});
			if ($info.result.error) {
				throw new ClientError(`Invalid mixture: ${$info.result.error}`);
			}
			const $mixture = await mixtureJobSource().create({
				aromaId,
				baseId: $info.base ? baseId : undefined,
				baseMl: $info.base?.volume || 0,
				boosterId: $info.booster ? boosterId : undefined,
				boosterCount: $info?.booster?.count || 0,
				volume: $aroma.volume,
				available: $info.available,
				content: $info.result.volume,
				diff: $info.result.volume - $aroma.volume,
				vg: $info.result.ratio.vg,
				pg: $info.result.ratio.pg,
				vgToMl: $info.result.ml.vg,
				pgToMl: $info.result.ml.pg,
				nicotine: $info.result.nicotine,
				draws: $info.result.draws,
			});
			await source.prisma.mixtureInventory.createMany({
				data: [{
					aromaInventoryId: $aromaInventory.id,
					boosterInventoryId: $boosterInventory?.id,
					baseInventoryId: $baseInventory?.id,
					mixtureId: $mixture.id,
					userId: source.user.required(),
				}],
				skipDuplicates: true,
			});
			return source.create({
				code: code || codeService().code(),
				mixed,
				mixtureId: $mixture.id,
			});
		}
	});

	return source;
};
