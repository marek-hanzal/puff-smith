import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILiquidService} from "@/puff-smith/service/liquid/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const LiquidService = (prismaClient: IPrismaClientTransaction = prisma): ILiquidService => ({
	...RepositoryService<ILiquidService>({
		name: "liquid",
		source: prismaClient.liquid,
		mapper: async liquid => ({
			...liquid,
			created: liquid.created.toUTCString(),
			mixed: liquid.mixed.toUTCString(),
			archived: liquid.archived?.toUTCString(),
			nicotine: liquid.nicotine.toNumber(),
			pg: liquid.pg.toNumber(),
			vg: liquid.vg.toNumber(),
			volume: liquid.volume.toNumber(),
			transaction: await TransactionService(prismaClient).toMap(liquid.transactionId),
		}),
		create: async ({code, aromas = [], bases = [], boosters = [], mixed, ...create}) => prisma.$transaction(prismaClient => TariffService(prismaClient).transactionOf({
				tariff: "default",
				userId: create.userId,
				price: "lab.liquid.create",
				note: "New liquid",
				callback: (_, transaction) => prismaClient.liquid.create({
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
		await prismaClient.liquid.updateMany({
			where,
			data: {
				archived: new Date(),
			},
		});
		return LiquidService(prismaClient).list(prismaClient.liquid.findMany({where}));
	}
});
