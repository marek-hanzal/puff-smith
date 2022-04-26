import {IBaseService} from "@/puff-smith/service/base/interface";
import prisma from "@/puff-smith/service/prisma";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const BaseService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IBaseService>({
	name: "base",
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
	onUnique: async ({vendor, ...create}) => prismaClient.base.update({
		where: {
			id: (await prismaClient.base.findFirst({
				where: {
					name: create.name,
					vendor: {
						name: vendor,
					}
				},
				rejectOnNotFound: true,
			})).id,
		},
		data: create,
	}),
	toFilter: ({fulltext, ...filter} = {}) => fulltext ? {
		...filter,
		OR: [
			{
				name: {
					contains: fulltext,
					mode: "insensitive",
				}
			},
			{
				vendor: {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				}
			},
		],
	} : filter,
});
