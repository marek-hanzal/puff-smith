import {ModService} from "@/puff-smith/service/mod";
import {IModMarketService} from "@/puff-smith/service/mod/market";
import prisma from "@/puff-smith/service/prisma";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const ModMarketService = (userId?: string, prismaClient: IPrismaClientTransaction = prisma): IModMarketService => RepositoryService<IModMarketService>({
	name: "mod-market",
	source: prismaClient.mod,
	mapper: async entity => ({
		mod: await ModService(prismaClient).map(entity),
		isOwned: userId ? (await prismaClient.modInventory.count({
			where: {
				modId: entity.id,
				userId,
			}
		})) > 0 : undefined,
	}),
	toFilter: ModService(prismaClient).toFilter,
	create: async () => {
		throw new Error("Invalid operation: read-only repository.");
	},
});
