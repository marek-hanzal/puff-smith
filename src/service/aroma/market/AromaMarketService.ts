import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAromaMarketService} from "@/puff-smith/service/aroma/market/interface";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const AromaMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): IAromaMarketService => RepositoryService<IAromaMarketService>({
	name: "aroma-market",
	source: prismaClient.aroma,
	mapper: async entity => ({
		aroma: await AromaService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.aromaInventory.count({
			where: {
				aromaId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: AromaService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
