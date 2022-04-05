import {AromaService} from "@/puff-smith/service/aroma";
import {BaseService} from "@/puff-smith/service/base";
import {BoosterService} from "@/puff-smith/service/booster";
import {ILiquidService} from "@/puff-smith/service/liquid";
import {toLiquidQuickMixInfo} from "@/puff-smith/service/liquid/utils";
import prisma from "@/puff-smith/service/prisma";
import {TariffService} from "@/puff-smith/service/tariff";
import {TransactionService} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const LiquidService = (prismaClient: IPrismaClientTransaction = prisma): ILiquidService => {
	const service = RepositoryService<ILiquidService>({
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
		create: async create => prisma.$transaction(prismaClient => TariffService(prismaClient).transactionOf({
				tariff: "default",
				userId: create.userId,
				price: "lab.liquid.create",
				note: "New liquid",
				callback: (_, transaction) => prismaClient.liquid.create({
					data: {
						...create,
						transactionId: transaction.id,
						created: new Date(),
						mixed: create.mixed || new Date(),
						steep: 14,
						pg: 0,
						vg: 0,
						nicotine: 0,
					},
				})
			})
		),
	});

	return {
		...service,
		handleQuickMix: async request => {
			// service.create();
			throw new Error("boom");
		},
		handleQuickMixInfo: async ({request: {aromaId, baseId, boosterId, nicotine}}) => toLiquidQuickMixInfo({
			aroma: aromaId ? await AromaService(prismaClient).fetch(aromaId) : undefined,
			base: baseId ? await BaseService(prismaClient).fetch(baseId) : undefined,
			booster: boosterId ? await BoosterService(prismaClient).fetch(boosterId) : undefined,
			nicotine,
		}),
	};
};
