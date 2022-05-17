import {ServiceCreate} from "@/puff-smith/service";
import {IPriceService, IPriceServiceCreate} from "@/puff-smith/service/price/interface";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const PriceService = (request: IPriceServiceCreate = ServiceCreate()): IPriceService => {
	const tariffService = singletonOf(() => TariffService(request));

	const priceOf: IPriceService["priceOf"] = async (tariff, price) => request.prisma.price.findFirst({
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
		...RepositoryService<IPriceService>({
			name: "price",
			source: request.prisma.price,
			mapper: async price => ({
				...price,
				price: price.price.toNumber(),
				tariff: await tariffService().toMap(price.tariffId),
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
