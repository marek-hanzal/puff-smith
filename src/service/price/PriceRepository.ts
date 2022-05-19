import {IPriceRepository, IPriceRepositoryCreate} from "@/puff-smith/service/price/interface";
import {TariffRepository} from "@/puff-smith/service/tariff/TariffRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const PriceRepository = (request: IPriceRepositoryCreate): IPriceRepository => {
	const tariffRepository = singletonOf(() => TariffRepository(request));

	const priceOf: IPriceRepository["priceOf"] = async (tariff, price) => request.prisma.price.findFirst({
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
		...Repository<IPriceRepository>({
			name: "price",
			source: request.prisma.price,
			mapper: async price => ({
				...price,
				price: price.price.toNumber(),
				tariff: await tariffRepository().toMap(price.tariffId),
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
