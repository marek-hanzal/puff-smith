import {IBoosterService, IBoosterServiceCreate} from "@/puff-smith/service/booster/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const BoosterService = (request: IBoosterServiceCreate) => {
	const codeService = singletonOf(() => CodeService());
	const vendorService = singletonOf(() => VendorService(request));

	return RepositoryService<IBoosterService>({
		name: "booster",
		source: request.prisma.booster,
		mapper: async booster => ({
			...booster,
			vendor: await vendorService().toMap(booster.vendorId),
		}),
		create: async ({vendor, code, ...booster}) => request.prisma.booster.create({
			data: {
				...booster,
				code: code || codeService().code(),
				vendor: {
					connect: {
						name: vendor,
					}
				},
			},
		}),
		onUnique: async ({vendor, ...booster}) => request.prisma.booster.update({
			where: {
				id: (await request.prisma.booster.findFirst({
					where: {
						OR: [
							{
								name: booster.name,
								vendor: {
									name: vendor,
								},
							},
							{
								code: booster.code,
							}
						]
					},
					rejectOnNotFound: true,
				})).id,
			},
			data: booster,
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
						}
					}
				}
			]
		}),
	});
};
