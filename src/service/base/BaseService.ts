import {ServiceCreate} from "@/puff-smith/service";
import {IBaseService, IBaseServiceCreate} from "@/puff-smith/service/base/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";

export const BaseService = (request: IBaseServiceCreate = ServiceCreate()) => RepositoryService<IBaseService>({
	name: "base",
	source: request.prisma.base,
	mapper: async base => ({
		...base,
		vendor: await VendorService(request).toMap(base.vendorId),
		cost: base.cost.toNumber(),
		pg: base.pg.toNumber(),
		vg: base.vg.toNumber(),
	}),
	create: async ({vendor, ...base}) => request.prisma.base.create({
		data: {
			...base,
			vendor: {
				connect: {
					name: vendor,
				}
			},
		},
	}),
	onUnique: async ({vendor, ...create}) => request.prisma.base.update({
		where: {
			id: (await request.prisma.base.findFirst({
				where: {
					name: create.name,
					vendor: {
						name: vendor,
					}
				},
				rejectOnNotFound: true,
			})).id,
		},
		data: create,
	}),
	toFilter: ({fulltext, ...filter} = {}) => fulltext ? {
		...filter,
		OR: [
			{
				name: {
					contains: fulltext,
					mode: "insensitive",
				}
			},
			{
				vendor: {
					name: {
						contains: fulltext,
						mode: "insensitive",
					},
				}
			},
		],
	} : filter,
});
