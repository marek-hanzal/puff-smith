import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAroma, IAromaEntity} from "@/puff-smith/service/aroma/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import {IQuery, ISource} from "@leight-core/api";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {Prisma} from "@prisma/client";

export interface IAromaMarket {
	aroma: IAroma;
	isOwned: boolean | undefined;
}

export interface IAromaMarketQuery extends IQuery<Prisma.AromaWhereInput, Prisma.AromaOrderByWithRelationInput> {
}

export interface IAromaMarketSource extends ISource<IAromaEntity, IAromaMarket, IAromaMarketQuery> {
}

export const AromaMarketSource = (): IAromaMarketSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IAromaMarketSource = Source<IAromaEntity, IAromaMarket, IAromaMarketQuery>({
		name: "aroma-market",
		get source() {
			return source.prisma.aroma;
		},
		query: async query => source.prisma.aroma.findMany({
			include: {
				vendor: true,
			}
		}),
		map: async entity => ({
			aroma: await aromaSource().mapper.map(entity),
			isOwned: await memoIsOwned(entity.id, source.user.required()),
		}),
		filter: filter => aromaSource().filter(filter),
	});

	return source;
};
