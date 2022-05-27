import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModSource} from "@/puff-smith/service/mod/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModSource = (): IModSource => {
	const vendorSource = singletonOf(() => VendorSource());
	const tagSource = singletonOf(() => TagSource());
	const codeService = singletonOf(() => CodeService());

	const source: IModSource = Source<IModSource>({
		name: "mod",
		prisma,
		map: async mod => mod ? ({
			...mod,
			vendor: await vendorSource().mapper.map(mod.vendor),
			cells: await tagSource().mapper.list(Promise.resolve(mod.ModCell.map(item => item.cell))),
		}) : mod,
		source: {
			get: async id => source.prisma.mod.findUnique({
				where: {id},
				include: {
					vendor: true,
					ModCell: {
						include: {
							cell: true,
						}
					},
				},
				rejectOnNotFound: true,
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
							data: cells ? (await tagSource().fetchCodes(`${cells}`, "cell-type")).map(tag => ({
								cellId: tag.id,
							})) : [],
						},
					},
				};
				try {
					return await source.prisma.mod.create({
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
				} catch (e) {
					return onUnique(e, async () => {
						const $mod = (await source.prisma.mod.findFirst({
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
							rejectOnNotFound: true,
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
		},
	});

	return source;
};
