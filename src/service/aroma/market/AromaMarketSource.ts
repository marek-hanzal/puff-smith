import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
import {memoIsOwned} from "@/puff-smith/service/aroma/memoize";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaMarketSource = (): IAromaMarketSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IAromaMarketSource = Source<IAromaMarketSource>({
		name: "aroma.market",
		prisma,
		source: {
			count: async () => source.prisma.aroma.count({}),
			query: async () => source.prisma.aroma.findMany({
				include: {
					vendor: true,
					AromaTaste: {
						include: {
							taste: true,
						},
					},
				},
			}),
		},
		map: async aroma => aroma ? ({
			aroma: await aromaSource().mapper.map(aroma),
			isOwned: await memoIsOwned(aroma.id, source.user.required()),
		}) : undefined,
	});

	return source;
};
