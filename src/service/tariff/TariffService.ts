import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {ITariffService} from "@/puff-smith/service/tariff/interface";
import {CodeService} from "@/puff-smith/service/code";

export const TariffService = (prismaClient: IPrismaClientTransaction = prisma): ITariffService => {
	const service: ITariffService = {
		...AbstractRepositoryService<ITariffService>(prismaClient, prismaClient.tariff, async tariff => {
			return {
				...tariff,
				from: tariff.from?.toUTCString(),
				to: tariff.to?.toUTCString(),
				created: tariff.created.toUTCString(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			tariff: () => ({
				handler: service.create,
			}),
		}),
		create: async create => {
			const code: string = create.code || CodeService().code();
			try {
				return await prismaClient.tariff.create({
					data: {
						...create,
						code,
						from: create.from ? new Date(create.from) : undefined,
						to: create.to ? new Date(create.to) : undefined,
						created: new Date(),
					},
				});
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _tariff = await prismaClient.tariff.findFirst({
						where: {
							code,
						},
						rejectOnNotFound: true,
					});
					return prismaClient.tariff.update({
						where: {
							id: _tariff.id,
						},
						data: {
							...create,
							from: create.from ? new Date(create.from) : null,
							to: create.to ? new Date(create.to) : null,
						},
					});
				});
			}
		},
		transactionOf: request => {
			return request.callback(null, null);
		}
	};

	return service;
}
