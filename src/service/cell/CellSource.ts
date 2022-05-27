import {ICellSource} from "@/puff-smith/service/cell/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellSource = (): ICellSource => {
	const vendorSource = singletonOf(() => VendorSource());
	const tagSource = singletonOf(() => TagSource());
	const codeService = singletonOf(() => CodeService());
	const ohmService = singletonOf(() => OhmService());

	const source: ICellSource = Source<ICellSource>({
		name: "cell",
		prisma,
		map: async cell => cell ? ({
			...cell,
			vendor: await vendorSource().mapper.map(cell.vendor),
			type: await tagSource().mapper.map(cell.type),
		}) : undefined,
		source: {
			get: async id => source.prisma.cell.findUnique({
				where: {id},
				include: {
					vendor: true,
					type: true,
				},
				rejectOnNotFound: true,
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
					return await source.prisma.cell.create({
						data: create,
						include: {
							vendor: true,
							type: true,
						},
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.cell.update({
						where: {
							id: (await source.prisma.cell.findFirst({
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
						include: {
							vendor: true,
							type: true,
						},
					}));
				}
			}
		},
		fetchCells: async cells => source.prisma.cell.findMany({
			where: {
				type: {
					code: {
						in: cells.split(/,\s+/ig).map(cell => `${cell}`.toLowerCase()),
					},
				},
			},
			include: {
				vendor: true,
				type: true,
			},
		})
	});
	return source;
};
