import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidRepository, ILiquidRepositoryCreate} from "@/puff-smith/service/liquid/interface";
import {MixtureRepository} from "@/puff-smith/service/mixture/MixtureRepository";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffRepository} from "@/puff-smith/service/tariff/TariffRepository";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const LiquidRepository = (request: ILiquidRepositoryCreate): ILiquidRepository => {
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const mixtureRepository = singletonOf(() => MixtureRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<ILiquidRepository>({
			name: "liquid",
			source: request.prisma.liquid,
			mapper: async liquid => ({
				...liquid,
				created: liquid.created.toUTCString(),
				mixed: liquid.mixed.toUTCString(),
				transaction: await transactionRepository().toMap(liquid.transactionId),
				mixture: await mixtureRepository().toMap(liquid.mixtureId),
			}),
			create: async ({code, mixed, ...liquid}) => prisma.$transaction(prisma => TariffRepository({...request, prisma}).transactionOf({
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
				const liquids = await LiquidRepository({...request, prisma}).list(prisma.liquid.findMany({where}));
				await prisma.liquid.deleteMany({
					where,
				});
				return liquids;
			});
		}
	};
};
