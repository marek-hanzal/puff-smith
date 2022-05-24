import {IPriceSource} from "@/puff-smith/service/price/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const PriceSource = (): IPriceSource => {
	const tariffSource = singletonOf(() => TariffSource());

	const source: IPriceSource = Source<IPriceSource>({
		name: "price",
		prisma,
		map: async price => ({
			...price,
			price: price.price.toNumber(),
			tariff: await tariffSource().toMap(price.tariffId),
			from: price.from?.toUTCString(),
			to: price.to?.toUTCString(),
			created: price.created.toUTCString(),
		}),
		create: async ({tariff, ...price}) => request.prisma.price.create({
			data: {
				...price,
				created: new Date(),
				tariff: {
					connect: {
						code: tariff,
					}
				}
			},
		}),
	});

	const priceOf: IPriceSource["priceOf"] = async (tariff, price) => request.prisma.price.findFirst({
		where: {
			name: price,
			tariff: {
				name: tariff,
			}
		},
		orderBy: [
			{
				tariff: {
					created: "desc",
				}
			},
			{
				created: "desc",
			},
		],
		rejectOnNotFound: true,
	});

	return {
		...,
		priceOf,
		amountOf: async (tariff, price, fallback) => {
			try {
				return (await priceOf(tariff, price))?.price.toNumber();
			} catch (e) {
				return fallback;
			}
		}
	};
};
