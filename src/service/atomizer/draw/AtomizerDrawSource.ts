import {IAtomizerDrawSource} from "@/puff-smith/service/atomizer/draw/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerDrawSource = (): IAtomizerDrawSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: IAtomizerDrawSource = Source<IAtomizerDrawSource>({
		name: "atomizer.draw",
		prisma,
		source: {
			count: async () => prisma.atomizerDraw.count({
				distinct: ["drawId"],
			}),
			query: async () => prisma.atomizerDraw.findMany({
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
