import {IMixtureDrawSource} from "@/puff-smith/service/mixture/draw/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureDrawSource = (): IMixtureDrawSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IMixtureDrawSource = Source<IMixtureDrawSource>({
		name: "mixture.draw",
		prisma,
		map: async mixtureDraw => tagSource().map(mixtureDraw?.draw),
		source: {
			count: async ({filter}) => source.prisma.mixtureDraw.count({
				distinct: ["drawId"],
				where: {
					mixture: filter,
				},
			}),
			query: async ({filter}) => source.prisma.mixtureDraw.findMany({
				distinct: ["drawId"],
				where: {
					mixture: filter,
				},
				orderBy: [
					{draw: {sort: "asc"}}
				],
				select: {
					draw: true,
				}
			}),
		}
	});

	return source;
};
