import {IBuildLiquidRatingSource} from "@/puff-smith/service/build/liquid/rating/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BuildLiquidRatingSource = (): IBuildLiquidRatingSource => {
	const source: IBuildLiquidRatingSource = Source<IBuildLiquidRatingSource>({
		name: "build.liquid.rating",
		prisma,
		map: async buildLiquidRating => buildLiquidRating ? {
			...buildLiquidRating,
			created: buildLiquidRating.created.toUTCString(),
		} : null,
		source: {
			create: async create => source.prisma.buildLiquidRating.upsert({
				create: {
					...create,
					created: new Date(),
				},
				update: {
					...create,
					created: new Date(),
				},
				where: {
					buildId_liquidId: {
						buildId: create.buildId,
						liquidId: create.liquidId,
					},
				},
			}),
		}
	});

	return source;
};
