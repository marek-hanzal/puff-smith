import {ServiceCreate} from "@/puff-smith/service";
import {IBoosterService, IBoosterServiceCreate} from "@/puff-smith/service/booster/interface";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const BoosterService = (request: IBoosterServiceCreate = ServiceCreate()) => RepositoryService<IBoosterService>({
	name: "booster",
	source: request.prisma.booster,
	mapper: async booster => ({
		...booster,
		vendor: await VendorService(request).toMap(booster.vendorId),
	}),
	create: async ({vendor, ...booster}) => request.prisma.booster.create({
		data: {
			...booster,
			vendor: {
				connect: {
					name: vendor,
				}
			},
		},
	}),
	onUnique: async ({vendor, ...create}) => request.prisma.booster.update({
		where: {
			id: (await request.prisma.booster.findFirst({
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
