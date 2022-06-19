import {IBuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BuildLiquidTasteRatingSource = (): IBuildLiquidTasteRatingSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IBuildLiquidTasteRatingSource = Source<IBuildLiquidTasteRatingSource>({
		name: "build.liquid.taste.rating",
		prisma,
		map: async buildLiquidTasteRating => buildLiquidTasteRating ? {
			...buildLiquidTasteRating,
			created: buildLiquidTasteRating.created.toUTCString(),
			taste: await tagSource().mapper.map(buildLiquidTasteRating.taste),
		} : undefined,
		source: {
			count: async ({filter}) => source.prisma.buildLiquidTasteRating.count({
				where: filter,
			}),
			query: async ({filter, ...query}) => source.prisma.buildLiquidTasteRating.findMany({
				where: filter,
				include: {
					taste: true,
				},
				...pageOf(query),
			}),
			create: async create => source.prisma.buildLiquidTasteRating.upsert({
				create: {
					...create,
					created: new Date(),
				},
				update: {
					...create,
					created: new Date(),
				},
				where: {
					buildId_liquidId_tasteId: {
						buildId: create.buildId,
						liquidId: create.liquidId,
						tasteId: create.tasteId,
					},
				},
				include: {
					taste: true,
				},
			}),
			patch: async patch => source.prisma.buildLiquidTasteRating.update({
				where: {
					id: patch.id,
				},
				data: {
					...patch,
					created: new Date(),
				},
				include: {
					taste: true,
				},
			}),
		},
		generateFor: async generate => {
			const tastes = await source.prisma.liquid.findMany({
				where: {
					id: generate.liquidId,
					userId: source.user.required(),
				},
				select: {
					aroma: {
						include: {
							AromaTaste: {
								orderBy: {taste: {sort: "asc"}},
							},
						}
					}
				}
			});
			for (const liquid of tastes) {
				for (const taste of liquid.aroma.AromaTaste) {
					await source.create({
						tasteId: taste.tasteId,
						buildId: generate.buildId,
						liquidId: generate.liquidId,
						rating: null,
					});
				}
			}
			return true;
		}
	});

	return source;
};
