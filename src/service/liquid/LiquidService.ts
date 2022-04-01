import {ILiquidService} from "@/puff-smith/service/liquid";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";
import {TariffService} from "@/puff-smith/service/tariff";

export const LiquidService = (prismaClient: IPrismaClientTransaction = prisma): ILiquidService => RepositoryService<ILiquidService>({
	name: 'liquid',
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
			tariff: 'default',
			userId: create.userId,
			price: 'lab.liquid.create',
			note: 'New liquid',
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
})
