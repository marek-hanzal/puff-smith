import {ILiquidService} from "@/puff-smith/service/liquid";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";
import {TariffService} from "@/puff-smith/service/tariff";
import {AromaService} from "@/puff-smith/service/aroma";
import {BaseService} from "@/puff-smith/service/base";

export const LiquidService = (prismaClient: IPrismaClientTransaction = prisma): ILiquidService => {
	const service = RepositoryService<ILiquidService>({
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
	});

	return {
		...service,
		handleQuickMix: async request => {
			// service.create();
			throw new Error("boom");
		},
		handleQuickMixInfo: async ({request: {aromaId, baseId}}) => {
			const aroma = aromaId && await AromaService(prismaClient).fetch(aromaId);
			const base = baseId && await BaseService(prismaClient).fetch(baseId);

			const _aroma = aroma ? {
				content: aroma.content.toNumber(),
				volume: aroma.volume?.toNumber(),
				pg: aroma.pg.toNumber(),
				vg: aroma.vg.toNumber(),
			} : undefined;

			if (aroma && base) {
				return {
					aroma: _aroma,
					base: {
						volume: aroma.volume && (aroma.volume.toNumber() - aroma.content.toNumber()),
						pg: base.pg.toNumber(),
						vg: base.vg.toNumber(),
					}
				}
			}
			if (aroma) {
				return {
					aroma: _aroma,
				}
			}

			return {};
		}
	};
}
