import {IModService} from "@/puff-smith/service/mod/interface";
import prisma from "@/puff-smith/service/prisma";
import {TagService} from "@/puff-smith/service/tag";
import {VendorService} from "@/puff-smith/service/vendor";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const ModService = (prismaClient: IPrismaClientTransaction = prisma): IModService => RepositoryService<IModService>({
	name: "mod",
	source: prismaClient.mod,
	mapper: async mod => ({
		...mod,
		cost: mod.cost.toNumber(),
		power: mod.power.toNumber(),
		voltage: mod.voltage.toNumber(),
		vendor: await VendorService(prismaClient).toMap(mod.vendorId),
		cells: await TagService(prismaClient).list(prismaClient.tag.findMany({
			where: {
				ModCell: {
					some: {
						modId: mod.id,
					}
				}
			},
			orderBy: {
				sort: "asc",
			}
		})),
	}),
	create: async ({vendor, cells, ...create}) => prismaClient.mod.create({
		data: {
			...create,
			vendor: {
				connect: {
					name: vendor,
				}
			}
		},
	}),
	onUnique: async ({vendor, cells, ...create}) => {
		const _mod = (await prismaClient.mod.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		await prismaClient.modCell.deleteMany({
			where: {
				modId: _mod.id,
			}
		});
		return prismaClient.mod.update({
			where: {
				id: _mod.id,
			},
			data: {
				...create,
				ModCell: {
					createMany: {
						data: cells ? (await TagService(prismaClient).fetchCodes(`${cells}`, "cell-type")).map(tag => ({
							cellId: tag.id,
						})) : [],
					}
				}
			},
		});
	}
});
