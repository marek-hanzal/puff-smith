import {IPriceSource, IPriceSourceCreate} from "@/puff-smith/service/price/interface";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const PriceSource = (request: IPriceSourceCreate): IPriceSource => {
	const tariffSource = singletonOf(() => TariffSource(request));

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
		...Source<IPriceSource>({
			name: "price",
			source: request.prisma.price,
			mapper: async price => ({
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
		}),
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
