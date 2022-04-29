import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidService, ILiquidServiceCreate} from "@/puff-smith/service/liquid/interface";
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
			nicotine: liquid.nicotine.toNumber(),
			pg: liquid.pg.toNumber(),
			vg: liquid.vg.toNumber(),
			volume: liquid.volume.toNumber(),
			transaction: await TransactionService(request).toMap(liquid.transactionId),
		}),
		create: async ({code, aromas = [], bases = [], boosters = [], mixed, ...create}) => prisma.$transaction(prisma => TariffService({...request, prisma}).transactionOf({
				tariff: "default",
				userId: create.userId,
				price: "lab.liquid.create",
				note: "New liquid",
				callback: (_, transaction) => request.prisma.liquid.create({
					data: {
						...create,
						code: code || CodeService().code(),
						transactionId: transaction.id,
						created: new Date(),
						mixed: mixed || new Date(),
						LiquidAroma: {
							createMany: {
								data: aromas,
							}
						},
						LiquidBooster: {
							createMany: {
								data: boosters,
							}
						},
						LiquidBase: {
							createMany: {
								data: bases,
							}
						},
					},
				})
			})
		),
		toFilter: filter => ({...filter, archived: null}),
	}),
	handleDelete: async ({request: {ids, userId}}) => {
		if (!userId) {
			throw new Error("Invalid operation: User is not specified.");
		}
		const where = {
			id: {
				in: ids,
			},
			userId,
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
