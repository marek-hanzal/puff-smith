import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModSource} from "@/puff-smith/service/mod/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModSource = (): IModSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IModSource = Source<IModSource>({
		name: "mod",
		prisma,
		map: async mod => ({
			...mod,
			vendor: await vendorSource().map(mod.vendor),
			cells: await tagSource().list(Promise.resolve(mod.ModCell.map(item => item.cell))),
		}),
		source: {
			get: async id => source.prisma.mod.findUniqueOrThrow({
				where: {id},
				include: {
					vendor: true,
					ModCell: {
						include: {
							cell: true,
						}
					},
				},
			}),
			create: async ({vendor, cells, code, ...mod}) => {
				const create = {
					...mod,
					code: code || codeService().code(),
					vendor: {
						connect: {
							name: vendor,
						}
					},
					ModCell: {
						createMany: {
							data: cells ? (await tagSource().fetchByCodes(`${cells}`, "cell-type")).map(tag => ({
								cellId: tag.id,
							})) : [],
						},
					},
				};
				try {
					return await source.prisma.mod.create({
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
							ModCell: {
								include: {
									cell: true,
								}
							}
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $mod = (await source.prisma.mod.findFirstOrThrow({
							where: {
								OR: [
									{
										name: create.name,
										vendor: {
											name: vendor,
										},
									},
									{
										code: create.code,
									}
								]
							},
						}));
						await source.prisma.modCell.deleteMany({
							where: {
								modId: $mod.id,
							}
						});
						return source.prisma.mod.update({
							where: {
								id: $mod.id,
							},
							data: create,
							include: {
								vendor: true,
								ModCell: {
									include: {
										cell: true,
									}
								}
							},
						});
					});
				}
			},
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				return prisma.$transaction(async prisma => {
					const items = await prisma.mod.findMany({
						where,
						include: {
							vendor: true,
							ModCell: {
								include: {
									cell: true,
								}
							}
						},
					});
					await prisma.mod.deleteMany({
						where,
					});
					return items;
				});
			}
		},
	});

	return source;
};
