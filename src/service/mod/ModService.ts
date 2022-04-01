import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IModService} from "@/puff-smith/service/mod/interface";
import {VendorService} from "@/puff-smith/service/vendor";

export const ModService = (prismaClient: IPrismaClientTransaction = prisma): IModService => RepositoryService<IModService>({
	name: 'mod',
	source: prismaClient.mod,
	mapper: async mod => ({
		...mod,
		cost: mod.cost.toNumber(),
		power: mod.power.toNumber(),
		voltage: mod.voltage.toNumber(),
		vendor: await VendorService(prismaClient).toMap(mod.vendorId),
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
	onUnique: async ({vendor, ...create}) => {
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
						data: [],
					}
				}
			},
		});
	}
});
