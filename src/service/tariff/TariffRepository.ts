import {CodeService} from "@/puff-smith/service/code/CodeService";
import {PriceRepository} from "@/puff-smith/service/price/PriceRepository";
import {ITariffRepository, ITariffRepositoryCreate} from "@/puff-smith/service/tariff/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {Price} from "@prisma/client";

export const TariffRepository = (request: ITariffRepositoryCreate): ITariffRepository => {
	const priceRepository = singletonOf(() => PriceRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const codeService = singletonOf(() => CodeService());

	return {
		...Repository<ITariffRepository>({
			name: "tariff",
			source: request.prisma.tariff,
			mapper: async tariff => ({
				...tariff,
				from: tariff.from?.toUTCString(),
				to: tariff.to?.toUTCString(),
				created: tariff.created.toUTCString(),
			}),
			create: async ({code, ...tariff}) => {
				const create = {
					...tariff,
					code: code || codeService().code(),
					from: tariff.from ? new Date(tariff.from) : null,
					to: tariff.to ? new Date(tariff.to) : null,
					created: new Date(),
				};
				try {
					return await request.prisma.tariff.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.tariff.update({
						where: {
							id: (await request.prisma.tariff.findUnique({
								where: {
									code: create.code,
								},
								rejectOnNotFound: true,
							})).id,
						},
						data: create,
					}));
				}
			},
		}),
		transactionOf: async ({tariff, fallback, userId, callback, price, note}) => {
			let $price: Price;
			try {
				$price = await priceRepository().priceOf(tariff, price);
			} catch (e) {
				if (!fallback) {
					throw e;
				}
				$price = await priceRepository().priceOf(fallback, price);
			}
			return transactionRepository().handleTransaction({
				userId,
				cost: $price.price.toNumber(),
				callback: async transaction => callback(await request.prisma.tariff.findFirst({
					where: {
						id: $price.tariffId,
					},
					rejectOnNotFound: true,
				}), transaction),
				note
			});
		}
	};
};
