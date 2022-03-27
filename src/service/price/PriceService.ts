import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IPriceService} from "@/puff-smith/service/price/interface";
import {TariffService} from "@/puff-smith/service/tariff";

export const PriceService = (prismaClient: IPrismaClientTransaction = prisma): IPriceService => {
	const service: IPriceService = {
		...AbstractRepositoryService<IPriceService>(prismaClient, prismaClient.price, async price => {
			return {
				...price,
				price: price.price.toNumber(),
				tariff: await TariffService(prismaClient).toMap(price.tariffId),
				from: price.from?.toUTCString(),
				to: price.to?.toUTCString(),
				created: price.created.toUTCString(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			price: () => ({
				handler: service.create,
			}),
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
		priceOf: async (tariff, price) => prismaClient.price.findFirst({
			where: {
				name: price,
				tariff: {
					name: tariff,
				}
			},
			orderBy: [
				{
					tariff: {
						created: 'desc',
					}
				},
				{
					created: 'desc',
				},
			],
			rejectOnNotFound: true,
		}),
	};

	return service;
}
