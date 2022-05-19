import {IBaseRepository, IBaseRepositoryCreate} from "@/puff-smith/service/base/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const BaseRepository = (request: IBaseRepositoryCreate): IBaseRepository => {
	const codeService = singletonOf(() => CodeService());
	const vendorRepository = singletonOf(() => VendorRepository(request));

	return Repository<IBaseRepository>({
		name: "base",
		source: request.prisma.base,
		mapper: async base => ({
			...base,
			vendor: await vendorRepository().toMap(base.vendorId),
		}),
		create: async ({vendor, code, ...base}) => {
			const create = {
				...base,
				code: code || codeService().code(),
				vendor: {
					connect: {
						name: vendor,
					}
				},
			};
			try {
				return await request.prisma.base.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => request.prisma.base.update({
					where: {
						id: (await request.prisma.base.findFirst({
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
						})).id,
					},
					data: base,
				}));
			}
		},
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
