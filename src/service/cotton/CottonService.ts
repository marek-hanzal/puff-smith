import {ICottonService} from "@/puff-smith/service/cotton";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const CottonService = (prismaClient: IPrismaClientTransaction = prisma): ICottonService => {
	const service: ICottonService = {
		...AbstractRepositoryService<ICottonService>(prismaClient, prismaClient.cotton, async cotton => {
			return {
				...cotton,
				vendor: await VendorService(prismaClient).toMap(cotton.vendorId),
				cost: cotton.cost.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			cotton: () => ({
				handler: service.create,
			}),
		}),
		create: async ({vendor, ...cotton}) => {
			try {
				return await prismaClient.cotton.create({
					data: {
						...cotton,
						vendor: {
							connect: {
								name: vendor,
							}
						},
					},
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _cotton = (await prismaClient.cotton.findFirst({
						where: {
							name: cotton.name,
							vendor: {
								name: vendor,
							}
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.cotton.update({
						where: {
							id: _cotton.id,
						},
						data: {
							...cotton,
							cost: cotton.cost,
						},
					})
				});
			}
		},
	};

	return service;
}
