import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {PriceService} from "@/puff-smith/service/price/PriceService";
import {ITariffService, ITariffServiceCreate} from "@/puff-smith/service/tariff/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import {Price} from "@prisma/client";

export const TariffService = (request: ITariffServiceCreate = ServiceCreate()): ITariffService => {
	const priceService = singletonOf(() => PriceService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const codeService = singletonOf(() => CodeService());

	return {
		...RepositoryService<ITariffService>({
			name: "tariff",
			source: request.prisma.tariff,
			mapper: async tariff => ({
				...tariff,
				from: tariff.from?.toUTCString(),
				to: tariff.to?.toUTCString(),
				created: tariff.created.toUTCString(),
			}),
			create: async tariff => {
				tariff.code = tariff.code || codeService().code();
				return await request.prisma.tariff.create({
					data: {
						...tariff,
						code: tariff.code,
						from: tariff.from ? new Date(tariff.from) : undefined,
						to: tariff.to ? new Date(tariff.to) : undefined,
						created: new Date(),
					},
				});
			},
			onUnique: async tariff => request.prisma.tariff.update({
				where: {
					id: (await request.prisma.tariff.findUnique({
						where: {
							code: tariff.code,
						},
						rejectOnNotFound: true,
					})).id,
				},
				data: {
					...tariff,
					from: tariff.from ? new Date(tariff.from) : null,
					to: tariff.to ? new Date(tariff.to) : null,
				},
			}),
		}),
		transactionOf: async ({tariff, fallback, userId, callback, price, note}) => {
			let $price: Price;
			try {
				$price = await priceService().priceOf(tariff, price);
			} catch (e) {
				if (!fallback) {
					throw e;
				}
				$price = await priceService().priceOf(fallback, price);
			}
			return transactionService().handleTransaction({
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
