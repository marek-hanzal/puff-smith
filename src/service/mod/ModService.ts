import {ServiceCreate} from "@/puff-smith/service";
import {IModService, IModServiceCreate} from "@/puff-smith/service/mod/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";

export const ModService = (request: IModServiceCreate = ServiceCreate()): IModService => RepositoryService<IModService>({
	name: "mod",
	source: request.prisma.mod,
	mapper: async mod => ({
		...mod,
		vendor: await VendorService(request).toMap(mod.vendorId),
		cells: await TagService(request).list(request.prisma.tag.findMany({
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
	create: async ({vendor, cells, ...create}) => request.prisma.mod.create({
		data: {
			...create,
			vendor: {
				connect: {
					name: vendor,
				}
			},
			ModCell: {
				createMany: {
					data: cells ? (await TagService(request).fetchCodes(`${cells}`, "cell-type")).map(tag => ({
						cellId: tag.id,
					})) : [],
				},
			},
		},
	}),
	onUnique: async ({vendor, cells, ...create}) => {
		const _mod = (await request.prisma.mod.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		await request.prisma.modCell.deleteMany({
			where: {
				modId: _mod.id,
			}
		});
		return request.prisma.mod.update({
			where: {
				id: _mod.id,
			},
			data: {
				...create,
				ModCell: {
					createMany: {
						data: cells ? (await TagService(request).fetchCodes(`${cells}`, "cell-type")).map(tag => ({
							cellId: tag.id,
						})) : [],
					}
				},
			},
		});
	}
});
