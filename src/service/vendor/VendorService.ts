import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IVendorService} from "@/puff-smith/service/vendor/interface";

export const VendorService = (prismaClient: IPrismaClientTransaction = prisma): IVendorService => RepositoryService<IVendorService>({
	name: 'vendor',
	source: prismaClient.vendor,
	mapper: async vendor => vendor,
	create: async create => prismaClient.vendor.create({
		data: create,
	}),
	onUnique: create => prismaClient.vendor.findFirst({
		where: {
			name: create.name,
		},
		rejectOnNotFound: true,
	}),
})
