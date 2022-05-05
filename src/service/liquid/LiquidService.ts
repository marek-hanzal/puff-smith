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
			archived: liquid.archived?.toUTCString(),
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
		toFilter: filter => ({...filter, archived: null}),
	}),
	handleDelete: async ({request: {ids}}) => {
		const where = {
			id: {
				in: ids,
			},
			userId: request.userService.getUserId(),
		};
		await request.prisma.liquid.updateMany({
			where,
			data: {
				archived: new Date(),
			},
		});
		return LiquidService(request).list(request.prisma.liquid.findMany({where}));
	}
});
