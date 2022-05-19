import {AromaRepository} from "@/puff-smith/service/aroma/AromaRepository";
import {IAromaMarketRepository, IAromaMarketRepositoryCreate} from "@/puff-smith/service/aroma/market/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaMarketRepository = (request: IAromaMarketRepositoryCreate): IAromaMarketRepository => {
	const aromaRepository = singletonOf(() => AromaRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return Repository<IAromaMarketRepository>({
		name: "aroma-market",
		source: request.prisma.aroma,
		mapper: async entity => ({
			aroma: await aromaRepository().map(entity),
			isOwned: await memoIsOwned(entity.id, userId()),
		}),
		toFilter: filter => aromaRepository().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
