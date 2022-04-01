import {ICellService} from "@/puff-smith/service/cell";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";
import {TagService} from "@/puff-smith/service/tag";

export const CellService = (prismaClient: IPrismaClientTransaction = prisma): ICellService => RepositoryService<ICellService>({
	name: 'cell',
	source: prismaClient.cell,
	mapper: async cell => ({
		...cell,
		vendor: await VendorService(prismaClient).toMap(cell.vendorId),
		type: await TagService(prismaClient).toMap(cell.typeId),
		cost: cell.cost.toNumber(),
		drain: cell.drain?.toNumber(),
		ohm: cell.ohm?.toNumber(),
		voltage: cell.voltage?.toNumber(),
	}),
	create: async ({type, vendor, ...cell}) => prismaClient.cell.create({
		data: {
			...cell,
			vendor: {
				connect: {
					name: vendor,
				}
			},
			type: {
				connect: {
					code_group: {
						code: `${type}`,
						group: 'cell-type',
					}
				}
			},
		},
	}),
	onUnique: async ({vendor, type, ...create}) => {
		const _cell = (await prismaClient.cell.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		return prismaClient.cell.update({
			where: {
				id: _cell.id,
			},
			data: {
				...create,
				type: {
					connect: {
						code_group: {
							code: `${type}`,
							group: 'cell-type',
						}
					}
				},
			},
		})
	}
});
