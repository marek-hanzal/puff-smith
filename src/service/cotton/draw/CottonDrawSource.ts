import {ICottonDrawSource} from "@/puff-smith/service/cotton/draw/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonDrawSource = (): ICottonDrawSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: ICottonDrawSource = Source<ICottonDrawSource>({
		name: "cotton.draw",
		prisma,
		map: async cottonDraw => tagSource().map(cottonDraw?.draw),
		source: {
			count: async () => source.prisma.cottonDraw.count({
				distinct: ["drawId"],
			}),
			query: async () => source.prisma.cottonDraw.findMany({
				distinct: ["drawId"],
				include: {
					draw: true,
				},
				orderBy: [
					{draw: {sort: "asc"}},
				],
			}),
		},
	});

	return source;
};
