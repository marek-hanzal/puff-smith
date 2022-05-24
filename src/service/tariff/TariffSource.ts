import {CodeService} from "@/puff-smith/service/code/CodeService";
import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITariffSource} from "@/puff-smith/service/tariff/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {Price} from "@prisma/client";

export const TariffSource = (): ITariffSource => {
	const priceSource = singletonOf(() => PriceSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const codeService = singletonOf(() => CodeService());

	const source: ITariffSource = Source<ITariffSource>({
		name: "tariff",
		prisma,
		map: async tariff => ({
			...tariff,
			from: tariff.from?.toUTCString(),
			to: tariff.to?.toUTCString(),
			created: tariff.created.toUTCString(),
		}),
		source: {
			create: async ({code, ...tariff}) => {
				const create = {
					...tariff,
					code: code || codeService().code(),
					from: tariff.from ? new Date(tariff.from) : null,
					to: tariff.to ? new Date(tariff.to) : null,
					created: new Date(),
				};
				try {
					return await source.prisma.tariff.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.tariff.update({
						where: {
							id: (await source.prisma.tariff.findUnique({
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
		},
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
				callback: async transaction => callback(await source.prisma.tariff.findFirst({
					where: {
						id: $price.tariffId,
					},
					rejectOnNotFound: true,
				}), transaction),
				note
			});
		},
	});

	return source;
};
