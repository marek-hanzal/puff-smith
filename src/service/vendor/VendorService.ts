import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IVendorService} from "@/puff-smith/service/vendor/interface";

export const VendorService = (prismaClient: IPrismaClientTransaction = prisma): IVendorService => {
	const service: IVendorService = {
		...AbstractRepositoryService<IVendorService>(prismaClient, prismaClient.vendor, async vendor => vendor),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers() {
			const handler = service.create;
			return ({
				vendor: () => ({
					handler,
				}),
			})
		},
		create: async create => {
			try {
				return await prismaClient.vendor.create({
					data: create,
				})
			} catch (e: any) {
				if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
					return (await prismaClient.vendor.findFirst({
						where: {
							name: create.name,
						}
					}))!!;
				}
				throw e;
			}
		}
	};

	return service;
};
