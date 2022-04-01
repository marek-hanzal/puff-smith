import {IBaseService} from "@/puff-smith/service/base";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const BaseService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IBaseService>({
	name: 'base',
	source: prismaClient.base,
	mapper: async base => ({
		...base,
		vendor: await VendorService(prismaClient).toMap(base.vendorId),
		cost: base.cost.toNumber(),
		pg: base.pg.toNumber(),
		vg: base.vg.toNumber(),
	}),
	create: async ({vendor, ...base}) => prismaClient.base.create({
		data: {
			...base,
			vendor: {
				connect: {
					name: vendor,
				}
			},
		},
	}),
	onUnique: async ({vendor, ...create}) => {
		const _base = (await prismaClient.base.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		return prismaClient.base.update({
			where: {
				id: _base.id,
			},
			data: create,
		})
	}
})
