import {IAromaService} from "@/puff-smith/service/aroma";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const AromaService = (prismaClient: IPrismaClientTransaction = prisma): IAromaService => {
	const service: IAromaService = {
		...AbstractRepositoryService<IAromaService>(prismaClient, prismaClient.aroma, async aroma => {
			return {
				...aroma,
				vendor: await VendorService(prismaClient).toMap(aroma.vendorId),
				cost: aroma.cost.toNumber(),
				volume: aroma.volume.toNumber(),
				pg: aroma.pg.toNumber(),
				vg: aroma.vg.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			aroma: () => ({
				handler: service.create,
			}),
		}),
		create: async ({vendor, ...aroma}) => {
			try {
				return await prismaClient.aroma.create({
					data: {
						...aroma,
						vendor: {
							connect: {
								name: vendor,
							}
						},
					},
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _aroma = (await prismaClient.aroma.findFirst({
						where: {
							name: aroma.name,
							vendor: {
								name: vendor,
							}
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.aroma.update({
						where: {
							id: _aroma.id,
						},
						data: aroma,
					})
				});
			}
		},
	};

	return service;
}
