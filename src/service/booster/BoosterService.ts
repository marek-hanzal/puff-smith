import {IBoosterService} from "@/puff-smith/service/booster";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const BoosterService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IBoosterService>({
	name: 'booster',
	source: prismaClient.booster,
	mapper: async booster => ({
		...booster,
		vendor: await VendorService(prismaClient).toMap(booster.vendorId),
		cost: booster.cost.toNumber(),
		volume: booster.volume.toNumber(),
		nicotine: booster.nicotine.toNumber(),
		pg: booster.pg.toNumber(),
		vg: booster.vg.toNumber(),
	}),
	create: async ({vendor, ...booster}) => prismaClient.booster.create({
		data: {
			...booster,
			vendor: {
				connect: {
					name: vendor,
				}
			},
		},
	}),
	onUnique: async ({vendor, ...create}) => {
		const _booster = (await prismaClient.booster.findFirst({
			where: {
				name: create.name,
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
			data: create,
		})
	}
})
