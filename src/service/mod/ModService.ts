import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {IModService, IModServiceCreate} from "@/puff-smith/service/mod/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const ModService = (request: IModServiceCreate = ServiceCreate()): IModService => {
	const vendorService = singletonOf(() => VendorService(request));
	const tagService = singletonOf(() => TagService(request));
	const codeService = singletonOf(() => CodeService());

	return RepositoryService<IModService>({
		name: "mod",
		source: request.prisma.mod,
		mapper: async mod => ({
			...mod,
			vendor: await vendorService().toMap(mod.vendorId),
			cells: await tagService().list(request.prisma.tag.findMany({
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
		create: async ({vendor, cells, code, ...mod}) => request.prisma.mod.create({
			data: {
				...mod,
				code: code || codeService().code(),
				vendor: {
					connect: {
						name: vendor,
					}
				},
				ModCell: {
					createMany: {
						data: cells ? (await tagService().fetchCodes(`${cells}`, "cell-type")).map(tag => ({
							cellId: tag.id,
						})) : [],
					},
				},
			},
		}),
		onUnique: async ({vendor, cells, ...mod}) => {
			const $mod = (await request.prisma.mod.findFirst({
				where: {
					OR: [
						{
							name: mod.name,
							vendor: {
								name: vendor,
							},
						},
						{
							code: mod.code,
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
				data: {
					...mod,
					ModCell: {
						createMany: {
							data: cells ? (await tagService().fetchCodes(`${cells}`, "cell-type")).map(tag => ({
								cellId: tag.id,
							})) : [],
						}
					},
				},
			});
		}
	});
};
