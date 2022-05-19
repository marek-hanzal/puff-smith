import {AtomizerRepository} from "@/puff-smith/service/atomizer/AtomizerRepository";
import {IAtomizerMarketRepository, IAtomizerMarketRepositoryCreate} from "@/puff-smith/service/atomizer/market/interface";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerMarketRepository = (request: IAtomizerMarketRepositoryCreate): IAtomizerMarketRepository => {
	const atomizerRepository = singletonOf(() => AtomizerRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IAtomizerMarketRepository>({
		name: "atomizer-market",
		source: request.prisma.atomizer,
		mapper: async entity => ({
			atomizer: await atomizerRepository().map(entity),
			isOwned: userId ? (await request.prisma.atomizerInventory.count({
				where: {
					atomizerId: entity.id,
					userId,
				}
			})) > 0 : undefined,
		}),
		toFilter: filter => atomizerRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
