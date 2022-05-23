import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaMarketSource, IAromaMarketSourceCreate} from "@/puff-smith/service/aroma/market/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaMarketSource = (request: IAromaMarketSourceCreate): IAromaMarketSource => {
	const aromaSource = singletonOf(() => AromaSource(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return Source<IAromaMarketSource>({
		name: "aroma-market",
		source: async ({}) => request.prisma.aroma,
		mapper: async entity => ({
			aroma: await aromaSource().map(entity),
			isOwned: await memoIsOwned(entity.id, userId()),
		}),
		toFilter: filter => aromaSource().toFilter(filter),
		create: async () => {
			throw new Error("Invalid operation: read-only repository.");
		},
	});
};
