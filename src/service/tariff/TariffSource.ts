import {CodeService} from "@/puff-smith/service/code/CodeService";
import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import {ITariffSource, ITariffSourceCreate} from "@/puff-smith/service/tariff/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {Price} from "@prisma/client";

export const TariffSource = (request: ITariffSourceCreate): ITariffSource => {
	const priceSource = singletonOf(() => PriceSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const codeService = singletonOf(() => CodeService());

	return {
		...Source<ITariffSource>({
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
				$price = await priceSource().priceOf(tariff, price);
			} catch (e) {
				if (!fallback) {
					throw e;
				}
				$price = await priceSource().priceOf(fallback, price);
			}
			return transactionSource().handleTransaction({
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
