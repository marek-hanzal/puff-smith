import {IPriceService} from "@/puff-smith/service/price/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const PriceService = (prismaClient: IPrismaClientTransaction = prisma): IPriceService => {
	const priceOf: IPriceService["priceOf"] = async (tariff, price) => prismaClient.price.findFirst({
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
			source: prismaClient.price,
			mapper: async price => ({
				...price,
				price: price.price.toNumber(),
				tariff: await TariffService(prismaClient).toMap(price.tariffId),
				from: price.from?.toUTCString(),
				to: price.to?.toUTCString(),
				created: price.created.toUTCString(),
			}),
			create: async ({tariff, ...create}) => prismaClient.price.create({
				data: {
					...create,
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
