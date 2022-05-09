import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidService, ILiquidServiceCreate} from "@/puff-smith/service/liquid/interface";
import {MixtureService} from "@/puff-smith/service/mixture/MixtureService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RepositoryService} from "@leight-core/server";

export const LiquidService = (request: ILiquidServiceCreate = ServiceCreate()): ILiquidService => ({
	...RepositoryService<ILiquidService>({
		name: "liquid",
		source: request.prisma.liquid,
		mapper: async liquid => ({
			...liquid,
			created: liquid.created.toUTCString(),
			mixed: liquid.mixed.toUTCString(),
			transaction: await TransactionService(request).toMap(liquid.transactionId),
			mixture: await MixtureService(request).toMap(liquid.mixtureId),
		}),
		create: async ({code, mixed, ...create}) => prisma.$transaction(prisma => TariffService({...request, prisma}).transactionOf({
				tariff: "default",
				userId: request.userService.getUserId(),
				price: "lab.liquid.create",
				note: "New liquid",
				callback: (_, transaction) => prisma.liquid.create({
					data: {
						...create,
						userId: request.userService.getUserId(),
						code: code || CodeService().code(),
						transactionId: transaction.id,
						created: new Date(),
						mixed: mixed || new Date(),
					},
				})
			})
		),
	}),
	handleDelete: async ({request: {ids}}) => {
		const where = {
			id: {
				in: ids,
			},
			userId: request.userService.getUserId(),
		};
		return prisma.$transaction(async prisma => {
			const liquids = await LiquidService({...request, prisma}).list(prisma.liquid.findMany({where}));
			await prisma.liquid.deleteMany({
				where,
			});
			return liquids;
		});
	}
});
