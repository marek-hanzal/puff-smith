import {IMixtureDrawSource} from "@/puff-smith/service/mixture/draw/interface";
import {MixtureDrawCache} from "@/puff-smith/service/mixture/inventory/draw/cache";
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
		cache: MixtureDrawCache,
		source: {
			query: async ({filter}) => {
				const userId = source.user.required();
				return source.prisma.mixtureDraw.findMany({
					distinct: ["drawId"],
					where: merge(filter || {}, {
						mixture: {
							MixtureInventory: {
								some: {
									userId,
								},
							},
						}
					}),
					orderBy: [
						{draw: {sort: "asc"}}
					],
					select: {
						draw: true,
					}
				});
			},
		}
	});

	return source;
};
