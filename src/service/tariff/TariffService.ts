import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {PriceService} from "@/puff-smith/service/price/PriceService";
import {ITariffService, ITariffServiceCreate} from "@/puff-smith/service/tariff/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {handleUniqueException, RepositoryService} from "@leight-core/server";
import {Price} from "@prisma/client";

export const TariffService = (request: ITariffServiceCreate = ServiceCreate()): ITariffService => ({
	...RepositoryService<ITariffService>({
		name: "tariff",
		source: request.prisma.tariff,
		mapper: async tariff => ({
			...tariff,
			from: tariff.from?.toUTCString(),
			to: tariff.to?.toUTCString(),
			created: tariff.created.toUTCString(),
		}),
		create: async create => {
			const code: string = create.code || CodeService().code();
			try {
				return await request.prisma.tariff.create({
					data: {
						...create,
						code,
						from: create.from ? new Date(create.from) : undefined,
						to: create.to ? new Date(create.to) : undefined,
						created: new Date(),
					},
				});
			} catch (e) {
				return handleUniqueException(e, async () => request.prisma.tariff.update({
					where: {
						id: (await request.prisma.tariff.findFirst({
							where: {
								code,
							},
							rejectOnNotFound: true,
						})).id,
					},
					data: {
						...create,
						from: create.from ? new Date(create.from) : null,
						to: create.to ? new Date(create.to) : null,
					},
				}));
			}
		},
	}),
	transactionOf: async ({tariff, fallback, userId, callback, price, note}) => {
		const priceService = PriceService(request);
		const transactionService = TransactionService(request);
		let _price: Price;
		try {
			_price = await priceService.priceOf(tariff, price);
		} catch (e) {
			if (!fallback) {
				throw e;
			}
			_price = await priceService.priceOf(fallback, price);
		}
		return transactionService.handleTransaction({
			userId,
			cost: _price.price.toNumber(),
			callback: async transaction => callback(await request.prisma.tariff.findFirst({
				where: {
					id: _price.tariffId,
				},
				rejectOnNotFound: true,
			}), transaction),
			note
		});
	}
});
