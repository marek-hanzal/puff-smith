import {ICottonService} from "@/puff-smith/service/cotton";
import prisma from "@/puff-smith/service/prisma";
import {VendorService} from "@/puff-smith/service/vendor";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const CottonService = (prismaClient: IPrismaClientTransaction = prisma): ICottonService => RepositoryService<ICottonService>({
	name: "cotton",
	source: prismaClient.cotton,
	mapper: async cotton => ({
		...cotton,
		vendor: await VendorService(prismaClient).toMap(cotton.vendorId),
		cost: cotton.cost.toNumber(),
	}),
	create: async ({vendor, ...cotton}) => prismaClient.cotton.create({
		data: {
			...cotton,
			vendor: {
				connect: {
					name: vendor,
				}
			},
		},
	}),
	onUnique: async ({vendor, ...create}) => prismaClient.cotton.update({
		where: {
			id: (await prismaClient.cotton.findFirst({
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
});
