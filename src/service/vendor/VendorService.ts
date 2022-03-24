import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IVendorService} from "@/puff-smith/service/vendor/interface";

export const VendorService = (prismaClient: IPrismaClientTransaction = prisma): IVendorService => {
	const service: IVendorService = {
		...AbstractRepositoryService<IVendorService>(prismaClient, prismaClient.vendor, async vendor => vendor),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			vendor: () => ({
				handler: service.create,
			}),
		}),
		create: async create => {
			try {
				return await prismaClient.vendor.create({
					data: create,
				})
			} catch (e) {
				return handleUniqueException(e, async () => await prismaClient.vendor.findFirst({
					where: {
						name: create.name,
					},
					rejectOnNotFound: true,
				}));
			}
		}
	};

	return service;
};
