import {IBoosterService} from "@/puff-smith/service/booster";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const BoosterService = (prismaClient: IPrismaClientTransaction = prisma): IBoosterService => {
	const service: IBoosterService = {
		...AbstractRepositoryService<IBoosterService>(prismaClient, prismaClient.booster, async booster => {
			return {
				...booster,
				vendor: await VendorService(prismaClient).toMap(booster.vendorId),
				cost: booster.cost.toNumber(),
				volume: booster.volume.toNumber(),
				nicotine: booster.nicotine.toNumber(),
				pg: booster.pg.toNumber(),
				vg: booster.vg.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			booster: () => ({
				handler: service.create,
			}),
		}),
		create: async ({vendor, ...booster}) => {
			try {
				return await prismaClient.booster.create({
					data: {
						...booster,
						vendor: {
							connect: {
								name: vendor,
							}
						},
					},
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _booster = (await prismaClient.booster.findFirst({
						where: {
							name: booster.name,
							vendor: {
								name: vendor,
							}
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.booster.update({
						where: {
							id: _booster.id,
						},
						data: booster,
					})
				});
			}
		},
	};

	return service;
}
