import {IMixtureDrawSource} from "@/puff-smith/service/mixture/draw/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const MixtureDrawSource = (): IMixtureDrawSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: IMixtureDrawSource = Source<IMixtureDrawSource>({
		name: "mixture.inventory.draw",
		prisma,
		map: async mixtureDraw => tagSource().map(mixtureDraw?.draw),
		source: {
			count: async ({filter}) => source.prisma.mixtureDraw.count({
				distinct: ["drawId"],
				where: merge(filter || {}, {
					mixture: {
						MixtureInventory: {
							some: {
								userId: source.user.required(),
							}
						}
					}
				}),
			}),
			query: async ({filter}) => source.prisma.mixtureDraw.findMany({
				distinct: ["drawId"],
				where: merge(filter || {}, {
					mixture: {
						MixtureInventory: {
							some: {
								userId: source.user.required(),
							}
						}
					}
				}),
				orderBy: [
					{draw: {sort: "asc"}}
				],
				include: {
					draw: true,
				}
			}),
		}
	});

	return source;
};
