import {ServiceCreate} from "@/puff-smith/service";
import {ICellService, ICellServiceCreate} from "@/puff-smith/service/cell/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CellService = (request: ICellServiceCreate = ServiceCreate()): ICellService => {
	const vendorService = singletonOf(() => VendorService(request));
	const tagService = singletonOf(() => TagService(request));
	const codeService = singletonOf(() => CodeService());
	const ohmService = singletonOf(() => OhmService());

	return {
		...RepositoryService<ICellService>({
			name: "cell",
			source: request.prisma.cell,
			mapper: async cell => ({
				...cell,
				vendor: await vendorService().toMap(cell.vendorId),
				type: await tagService().toMap(cell.typeId),
			}),
			create: async ({type, vendor, code, ...cell}) => request.prisma.cell.create({
				data: {
					...cell,
					code: code || codeService().code(),
					ohm: cell.drain ? ohmService().toOhm(cell.voltage, cell.drain * 0.75) : undefined,
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
							OR: [
								{
									name: create.name,
									vendor: {
										name: vendor,
									}
								},
								{
									code: create.code,
								}
							],
						},
						rejectOnNotFound: true,
					})).id,
				},
				data: {
					...create,
					ohm: create.drain ? ohmService().toOhm(create.voltage, create.drain * 0.75) : null,
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
	};
};
