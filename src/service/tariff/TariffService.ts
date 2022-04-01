import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {handleUniqueException, RepositoryService} from "@leight-core/server";
import {ITariffService} from "@/puff-smith/service/tariff/interface";
import {CodeService} from "@/puff-smith/service/code";
import {PriceService} from "@/puff-smith/service/price";
import {TransactionService} from "@/puff-smith/service/transaction";
import {Price} from "@prisma/client";

export const TariffService = (prismaClient: IPrismaClientTransaction = prisma): ITariffService => ({
	...RepositoryService<ITariffService>({
		name: 'tariff',
		source: prismaClient.tariff,
		mapper: async tariff => ({
			...tariff,
			from: tariff.from?.toUTCString(),
			to: tariff.to?.toUTCString(),
			created: tariff.created.toUTCString(),
		}),
		create: async create => {
			const code: string = create.code || CodeService().code();
			try {
				return await prismaClient.tariff.create({
					data: {
						...create,
						code,
						from: create.from ? new Date(create.from) : undefined,
						to: create.to ? new Date(create.to) : undefined,
						created: new Date(),
					},
				});
			} catch (e) {
				return handleUniqueException(e, async () => prismaClient.tariff.update({
					where: {
						id: (await prismaClient.tariff.findFirst({
							where: {
								code,
							},
							rejectOnNotFound: true,
						})).id,
					},
					data: {
						...create,
						from: create.from ? new Date(create.from) : null,
						to: create.to ? new Date(create.to) : null,
					},
				}));
			}
		},
	}),
	transactionOf: async ({tariff, fallback, userId, callback, price, note}) => {
		const priceService = PriceService(prismaClient);
		const transactionService = TransactionService(prismaClient);
		let _price: Price;
		try {
			_price = await priceService.priceOf(tariff, price);
		} catch (e) {
			if (!fallback) {
				throw e;
			}
			_price = await priceService.priceOf(fallback, price);
		}
		return transactionService.handleTransaction({
			userId,
			cost: _price.price.toNumber(),
			callback: async transaction => callback(await prismaClient.tariff.findFirst({
				where: {
					id: _price.tariffId,
				},
				rejectOnNotFound: true,
			}), transaction),
			note
		})
	}
})
