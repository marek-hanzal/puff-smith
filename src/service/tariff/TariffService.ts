import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {ITariffService} from "@/puff-smith/service/tariff/interface";
import {CodeService} from "@/puff-smith/service/code";
import {PriceService} from "@/puff-smith/service/price";
import {TransactionService} from "@/puff-smith/service/transaction";
import {Price, Tariff} from "@prisma/client";

export const TariffService = (prismaClient: IPrismaClientTransaction = prisma): ITariffService => {
	const service: ITariffService = {
		...AbstractRepositoryService<ITariffService>(prismaClient, prismaClient.tariff, async tariff => {
			return {
				...tariff,
				from: tariff.from?.toUTCString(),
				to: tariff.to?.toUTCString(),
				created: tariff.created.toUTCString(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			tariff: () => ({
				handler: service.create,
			}),
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
				return handleUniqueException(e, async () => {
					const _tariff = await prismaClient.tariff.findFirst({
						where: {
							code,
						},
						rejectOnNotFound: true,
					});
					return prismaClient.tariff.update({
						where: {
							id: _tariff.id,
						},
						data: {
							...create,
							from: create.from ? new Date(create.from) : null,
							to: create.to ? new Date(create.to) : null,
						},
					});
				});
			}
		},
		transactionOf: async ({tariff, fallback, userId, callback, price, note}) => {
			const priceService = PriceService(prismaClient);
			const transactionService = TransactionService(prismaClient);
			let _tariff: Tariff;
			let _price: Price;
			try {
				_price = await priceService.priceOf(tariff, price);
				_tariff = await service.fetch(_price.tariffId);
			} catch (e) {
				if (!fallback) {
					throw e;
				}
				_price = await priceService.priceOf(fallback, price);
				_tariff = await service.fetch(_price.tariffId);
			}
			return transactionService.handleTransaction({
				userId,
				cost: _price.price.toNumber(),
				callback: transaction => callback(_tariff, transaction),
				note
			})
		}
	};

	return service;
}
