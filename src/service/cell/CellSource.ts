import {ICellSource} from "@/puff-smith/service/cell/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {OhmService} from "@/puff-smith/service/ohm/OhmService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellSource = (): ICellSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());
	const ohmService = singletonOf(() => OhmService());

	const source: ICellSource = Source<ICellSource>({
		name: "cell",
		prisma,
		map: async cell => cell ? {
			...cell,
			vendor: await vendorSource().mapper.map(cell.vendor),
			type: await tagSource().mapper.map(cell.type),
		} : null,
		source: {
			get: async id => source.prisma.cell.findUniqueOrThrow({
				where: {id},
				include: {
					vendor: true,
					type: true,
				},
			}),
			create: async ({type, typeId, vendor, vendorId, code, withInventory = false, ...cell}) => {
				const $create = async () => {
					const create = {
						...cell,
						code: code || codeService().code(),
						ohm: cell.drain ? ohmService().toOhm(cell.voltage, cell.drain * 0.75) : undefined,
						vendor: {
							connect: {
								name: vendor,
								id: vendorId,
							}
						},
						type: {
							connect: {
								code_group: type ? {
									code: `${type}`,
									group: "cell-type",
								} : undefined,
								id: typeId,
							}
						},
					};
					try {
						return await source.prisma.cell.create({
							data: {
								...create,
								user: source.user.optional() ? {
									connect: {
										id: source.user.optional(),
									}
								} : undefined,
							},
							include: {
								vendor: true,
								type: true,
							},
						});
					} catch (e) {
						return onUnique(e, async () => source.prisma.cell.update({
							where: {
								id: (await source.prisma.cell.findFirstOrThrow({
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
								})).id,
							},
							data: create,
							include: {
								vendor: true,
								type: true,
							},
						}));
					}
				};
				const $cell = await $create();
				withInventory && await source.prisma.cellInventory.createMany({
					data: [{
						code: codeService().code(),
						cellId: $cell.id,
						userId: source.user.required(),
					}],
					skipDuplicates: true,
				});
				return $cell;
			},
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				return prisma.$transaction(async prisma => {
					const items = await prisma.cell.findMany({
						where,
						include: {
							vendor: true,
							type: true,
						},
					});
					await prisma.cell.deleteMany({
						where,
					});
					return items;
				});
			},
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
