import {ServiceCreate} from "@/puff-smith/service";
import {ICellService, ICellServiceCreate} from "@/puff-smith/service/cell/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";

export const CellService = (request: ICellServiceCreate = ServiceCreate()): ICellService => ({
	...RepositoryService<ICellService>({
		name: "cell",
		source: request.prisma.cell,
		mapper: async cell => ({
			...cell,
			vendor: await VendorService(request).toMap(cell.vendorId),
			type: await TagService(request).toMap(cell.typeId),
			cost: cell.cost.toNumber(),
			drain: cell.drain?.toNumber(),
			ohm: cell.ohm?.toNumber(),
			voltage: cell.voltage?.toNumber(),
		}),
		create: async ({type, vendor, ...cell}) => request.prisma.cell.create({
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
							group: "cell-type",
						}
					}
				},
			},
		}),
		onUnique: async ({vendor, type, ...create}) => request.prisma.cell.update({
			where: {
				id: (await request.prisma.cell.findFirst({
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
				type: {
					connect: {
						code_group: {
							code: `${type}`,
							group: "cell-type",
						}
					}
				},
			},
		}),
	}),
	fetchCells: async cells => request.prisma.cell.findMany({
		where: {
			type: {
				code: {
					in: cells.split(/,\s+/ig).map(cell => `${cell}`.toLowerCase()),
				},
			},
		}
	}),
});
