import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICottonMarketService} from "@/puff-smith/service/cotton/market/interface";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const CottonMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): ICottonMarketService => RepositoryService<ICottonMarketService>({
	name: "cotton-market",
	source: prismaClient.cotton,
	mapper: async entity => ({
		cotton: await CottonService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.cottonInventory.count({
			where: {
				cottonId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: CottonService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
