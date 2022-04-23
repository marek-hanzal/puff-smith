import {AtomizerService} from "@/puff-smith/service/atomizer";
import {IAtomizerMarketService} from "@/puff-smith/service/atomizer/market";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const AtomizerMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): IAtomizerMarketService => RepositoryService<IAtomizerMarketService>({
	name: "atomizer-market",
	source: prismaClient.atomizer,
	mapper: async entity => ({
		atomizer: await AtomizerService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.atomizerInventory.count({
			where: {
				atomizerId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: AtomizerService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});