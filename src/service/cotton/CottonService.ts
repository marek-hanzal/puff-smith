import {ICottonService} from "@/puff-smith/service/cotton/interface";
import prisma from "@/puff-smith/service/prisma";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const CottonService = (prismaClient: IPrismaClientTransaction = prisma): ICottonService => RepositoryService<ICottonService>({
	name: "cotton",
	source: prismaClient.cotton,
	mapper: async cotton => ({
		...cotton,
		vendor: await VendorService(prismaClient).toMap(cotton.vendorId),
		cost: cotton.cost.toNumber(),
		draws: await TagService(prismaClient).list(prismaClient.tag.findMany({
			where: {
				CottonDraw: {
					some: {
						cottonId: cotton.id,
					}
				}
			}
		})),
	}),
	create: async ({vendor, draws, ...cotton}) => prismaClient.cotton.create({
		data: {
			...cotton,
			vendor: {
				connect: {
					name: vendor,
				}
			},
			CottonDraw: {
				createMany: {
					data: draws ? (await TagService(prismaClient).fetchCodes(draws, "draw")).map(tag => ({
						drawId: tag.id,
					})) : [],
				}
			},
		},
	}),
	onUnique: async ({vendor, draws, ...create}) => {
		const _cotton = (await prismaClient.cotton.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		await prismaClient.cottonDraw.deleteMany({
			where: {
				cottonId: _cotton.id,
			}
		});

		return prismaClient.cotton.update({
			where: {
				id: (await prismaClient.cotton.findFirst({
					where: {
						name: create.name,
						vendor: {
							name: vendor,
						}
					},
					rejectOnNotFound: true,
				})).id,
			},
			data: {
				...create,
				CottonDraw: {
					createMany: {
						data: draws ? (await TagService(prismaClient).fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			},
		});
	},
});
