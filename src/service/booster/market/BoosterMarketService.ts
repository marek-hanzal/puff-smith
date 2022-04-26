import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBoosterMarketService} from "@/puff-smith/service/booster/market/interface";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const BoosterMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): IBoosterMarketService => RepositoryService<IBoosterMarketService>({
	name: "booster-market",
	source: prismaClient.booster,
	mapper: async entity => ({
		booster: await BoosterService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.boosterInventory.count({
			where: {
				boosterId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: BoosterService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
