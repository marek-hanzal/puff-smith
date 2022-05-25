import {FiberSource} from "@/puff-smith/service/fiber/FiberSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IWireFiberSource} from "@/puff-smith/service/wire/fiber/interface";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const WireFiberSource = (): IWireFiberSource => {
	const fiberSource = singletonOf(() => FiberSource());

	const source: IWireFiberSource = Source<IWireFiberSource>({
		name: "wire.fiber",
		prisma,
		map: async wireFiber => fiberSource().map(wireFiber?.fiber),
		source: {
			count: async () => source.prisma.wireFiber.count({
				distinct: ["fiberId"],
			}),
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wireFiber.findMany({
				distinct: ["fiberId"],
				include: {
					fiber: true,
				},
				where: merge(filter, {
					fiber: {
						code: {
							contains: fulltext,
							mode: "insensitive",
						},
					},
				}),
				orderBy: [
					{fiber: {code: "asc"}},
				],
			}),
		},
	});

	return source;
};
