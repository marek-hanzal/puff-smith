import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IWireFiberSource} from "@/puff-smith/service/wire/market/fiber/interface";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const WireFiberSource = (): IWireFiberSource => {
	const fiberSource = singletonOf(() => FiberSource());

	const source: IWireFiberSource = Source<IWireFiberSource>({
		name: "wire.market.fiber",
		prisma,
		map: async wireFiber => fiberSource().map(wireFiber?.fiber),
		source: {
			count: async () => source.prisma.wireFiber.count({
				distinct: ["fiberId"],
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wireFiber.findMany({
				distinct: ["fiberId"],
				select: {
					fiber: {
						include: {
							material: true,
						}
					},
				},
				where: {
					fiber: merge(filter, {
						code: {
							contains: fulltext,
							mode: "insensitive",
						},
					}),
				},
				orderBy: [
					{fiber: {code: "asc"}},
				],
			}),
		},
	});

	return source;
};
