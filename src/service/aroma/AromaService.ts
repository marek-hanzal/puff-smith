import {IAromaService} from "@/puff-smith/service/aroma";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const AromaService = (prismaClient: IPrismaClientTransaction = prisma): IAromaService => RepositoryService<IAromaService>({
	name: 'aroma',
	source: prismaClient.aroma,
	create: async ({vendor, ...aroma}) => prismaClient.aroma.create({
		data: {
			...aroma,
			vendor: {
				connect: {
					name: vendor,
				}
			},
		},
	}),
	onUnique: async ({vendor, ...create}) => {
		return prismaClient.aroma.update({
			where: {
				id: (await prismaClient.aroma.findFirst({
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
		})
	},
	mapper: async aroma => ({
		...aroma,
		vendor: await VendorService(prismaClient).toMap(aroma.vendorId),
		cost: aroma.cost.toNumber(),
		volume: aroma.volume.toNumber(),
		pg: aroma.pg.toNumber(),
		vg: aroma.vg.toNumber(),
	}),
	toFilter: ({fulltext, ...filter} = {}) => {
		if (fulltext) {
			return {
				...filter,
				OR: [
					{
						name: {
							contains: fulltext,
							mode: 'insensitive',
						}
					},
					{
						vendor: {
							name: {
								contains: fulltext,
								mode: 'insensitive',
							},
						}
					},
				],
			};
		}
		return filter;
	}
})
