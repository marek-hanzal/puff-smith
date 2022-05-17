import {IBaseService, IBaseServiceCreate} from "@/puff-smith/service/base/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const BaseService = (request: IBaseServiceCreate) => {
	const codeService = singletonOf(() => CodeService());
	const vendorService = singletonOf(() => VendorService(request));

	return RepositoryService<IBaseService>({
		name: "base",
		source: request.prisma.base,
		mapper: async base => ({
			...base,
			vendor: await vendorService().toMap(base.vendorId),
		}),
		create: async ({vendor, code, ...base}) => request.prisma.base.create({
			data: {
				...base,
				code: code || codeService().code(),
				vendor: {
					connect: {
						name: vendor,
					}
				},
			},
		}),
		onUnique: async ({vendor, ...base}) => request.prisma.base.update({
			where: {
				id: (await request.prisma.base.findFirst({
					where: {
						OR: [
							{
								name: base.name,
								vendor: {
									name: vendor,
								},
							},
							{
								code: base.code,
							}
						]
					},
					rejectOnNotFound: true,
				})).id,
			},
			data: base,
		}),
		toFilter: ({fulltext, ...filter} = {}) => deepmerge(filter, {
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
		}),
	});
};
