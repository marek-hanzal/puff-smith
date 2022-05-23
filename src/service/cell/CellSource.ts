import {ICellSource, ICellSourceCreate} from "@/puff-smith/service/cell/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellSource = (request: ICellSourceCreate): ICellSource => {
	const vendorSource = singletonOf(() => VendorRepository(request));
	const tagSource = singletonOf(() => TagSource(request));
	const codeService = singletonOf(() => CodeService());
	const ohmService = singletonOf(() => OhmService());

	return {
		...Source<ICellSource>({
			name: "cell",
			source: request.prisma.cell,
			mapper: async cell => ({
				...cell,
				vendor: await vendorSource().toMap(cell.vendorId),
				type: await tagSource().toMap(cell.typeId),
			}),
			create: async ({type, vendor, code, ...cell}) => {
				const create = {
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
				};
				try {
					return await request.prisma.cell.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.cell.update({
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
						data: create,
					}));
				}
			},
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
