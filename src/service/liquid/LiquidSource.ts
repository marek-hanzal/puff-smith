import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const LiquidSource = (): ILiquidSource => {
	const transactionSource = singletonOf(() => TransactionSource());
	const mixtureSource = singletonOf(() => MixtureSource());

	const source: ILiquidSource = Source<ILiquidSource>({
		name: "liquid",
		prisma,
		map: async liquid => ({
			...liquid,
			created: liquid.created.toUTCString(),
			mixed: liquid.mixed.toUTCString(),
			transaction: await transactionSource().mapper.map(liquid.transaction),
			mixture: await mixtureSource().mapper.map(liquid.mixture),
		}),
		source: {
			create: async ({code, mixed, ...liquid}) => prisma.$transaction(prisma => {
				const userId = source.user.required();
				const tariffSource = TariffSource();
				tariffSource.withPrisma(prisma);

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
								transaction: true,
								aroma: {
									include: {
										vendor: true,
									},
								},
								mixture: {
									include: {
										aroma: {
											include: {
												vendor: true,
											}
										}
									}
								},
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
							transaction: true,
							aroma: {
								include: {
									vendor: true,
								},
							},
							mixture: {
								include: {
									aroma: {
										include: {
											vendor: true,
										}
									}
								}
							},
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
