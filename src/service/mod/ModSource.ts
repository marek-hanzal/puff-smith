import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModSource, IModSourceCreate} from "@/puff-smith/service/mod/interface";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModSource = (request: IModSourceCreate): IModSource => {
	const vendorSource = singletonOf(() => VendorRepository(request));
	const tagSource = singletonOf(() => TagSource(request));
	const codeService = singletonOf(() => CodeService());

	return Source<IModSource>({
		name: "mod",
		source: request.prisma.mod,
		mapper: async mod => ({
			...mod,
			vendor: await vendorSource().toMap(mod.vendorId),
			cells: await tagSource().list(request.prisma.tag.findMany({
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
				return await request.prisma.mod.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => {
					const $mod = (await request.prisma.mod.findFirst({
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
					await request.prisma.modCell.deleteMany({
						where: {
							modId: $mod.id,
						}
					});
					return request.prisma.mod.update({
						where: {
							id: $mod.id,
						},
						data: create,
					});
				});
			}
		},
	});
};
