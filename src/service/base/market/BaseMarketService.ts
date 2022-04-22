import {BaseService} from "@/puff-smith/service/base";
import {IBaseMarketService} from "@/puff-smith/service/base/market";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const BaseMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): IBaseMarketService => RepositoryService<IBaseMarketService>({
	name: "base-market",
	source: prismaClient.base,
	mapper: async entity => ({
		base: await BaseService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.baseInventory.count({
			where: {
				baseId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: BaseService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
