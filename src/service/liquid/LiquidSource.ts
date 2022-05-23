import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidSource, ILiquidSourceCreate} from "@/puff-smith/service/liquid/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const LiquidSource = (request: ILiquidSourceCreate): ILiquidSource => {
	const transactionSource = singletonOf(() => TransactionSource(request));
	const mixtureSource = singletonOf(() => MixtureRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<ILiquidSource>({
			name: "liquid",
			source: request.prisma.liquid,
			mapper: async liquid => ({
				...liquid,
				created: liquid.created.toUTCString(),
				mixed: liquid.mixed.toUTCString(),
				transaction: await transactionSource().toMap(liquid.transactionId),
				mixture: await mixtureSource().toMap(liquid.mixtureId),
			}),
			create: async ({code, mixed, ...liquid}) => prisma.$transaction(prisma => TariffSource({...request, prisma}).transactionOf({
					tariff: "default",
					userId: userId(),
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
								userId: userId(),
								aromaId: $mixture.aromaId,
								vendorId: $mixture.vendorId,
								boosterId: $mixture.boosterId,
								baseId: $mixture.baseId,
								code: code || CodeService().code(),
								transactionId: transaction.id,
								created: new Date(),
								mixed: mixed || new Date(),
							},
						});
					}
				})
			),
		}),
		handleDelete: async ({request: {ids}}) => {
			const where = {
				id: {
					in: ids,
				},
				userId: userId(),
			};
			return prisma.$transaction(async prisma => {
				const liquids = await LiquidSource({...request, prisma}).list(prisma.liquid.findMany({where}));
				await prisma.liquid.deleteMany({
					where,
				});
				return liquids;
			});
		}
	};
};
