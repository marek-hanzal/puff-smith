import {ILiquidService} from "@/puff-smith/service/liquid";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";

export const LiquidService = (prismaClient: IPrismaClientTransaction = prisma): ILiquidService => {
	const service: ILiquidService = {
		...AbstractRepositoryService<ILiquidService>(prismaClient, prismaClient.liquid, async liquid => {
			return {
				...liquid,
				created: liquid.created.toUTCString(),
				mixed: liquid.mixed.toUTCString(),
				archived: liquid.archived?.toUTCString(),
				nicotine: liquid.nicotine.toNumber(),
				pg: liquid.pg.toNumber(),
				vg: liquid.vg.toNumber(),
				volume: liquid.volume.toNumber(),
				transaction: await TransactionService(prismaClient).toMap(liquid.transactionId),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			liquid: () => ({
				handler: service.create,
			}),
		}),
		create: async liquid => {
			throw new Error('not implemented yet; waiting for tariff/price');
			// return TransactionService(prismaClient).handlePriceTransaction(liquid.userId, 'lab.liquid', async transaction => prismaClient.liquid.create({
			// 	data: {
			// 		...liquid,
			// 		transactionId: transaction.id,
			// 		created: new Date(),
			// 		mixed: liquid.mixed || new Date(),
			//
			// 		pg: 0,
			// 		vg: 0,
			// 		nicotine: 0,
			// 	},
			// }))
		},
	};

	return service;
}
