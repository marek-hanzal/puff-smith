import prisma from "@/puff-smith/service/prisma";
import {IVendorService} from "@/puff-smith/service/vendor/interface";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const VendorService = (prismaClient: IPrismaClientTransaction = prisma): IVendorService => RepositoryService<IVendorService>({
	name: "vendor",
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
});
