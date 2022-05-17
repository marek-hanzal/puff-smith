import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidService, ILiquidServiceCreate} from "@/puff-smith/service/liquid/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const LiquidService = (request: ILiquidServiceCreate): ILiquidService => {
	const transactionService = singletonOf(() => TransactionService(request));
	const mixtureService = singletonOf(() => MixtureService(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...RepositoryService<ILiquidService>({
			name: "liquid",
			source: request.prisma.liquid,
			mapper: async liquid => ({
				...liquid,
				created: liquid.created.toUTCString(),
				mixed: liquid.mixed.toUTCString(),
				transaction: await transactionService().toMap(liquid.transactionId),
				mixture: await mixtureService().toMap(liquid.mixtureId),
			}),
			create: async ({code, mixed, ...liquid}) => prisma.$transaction(prisma => TariffService({...request, prisma}).transactionOf({
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
				const liquids = await LiquidService({...request, prisma}).list(prisma.liquid.findMany({where}));
				await prisma.liquid.deleteMany({
					where,
				});
				return liquids;
			});
		}
	};
};
