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
		source: {
			count: async () => prisma.cottonDraw.count({
				distinct: ["drawId"],
			}),
			query: async () => prisma.cottonDraw.findMany({
				distinct: ["drawId"],
				include: {
					draw: true,
				},
				orderBy: [
					{draw: {sort: "asc"}},
				],
			}),
		},
		map: async ({draw}) => tagSource().mapper.map(draw),
	});

	return source;
};
