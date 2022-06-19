import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {ILiquidAromaSource} from "@/puff-smith/service/liquid/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LiquidAromaSource = (): ILiquidAromaSource => {
	const aromaSource = singletonOf(() => AromaSource().ofSource(source));

	const source: ILiquidAromaSource = Source<ILiquidAromaSource>({
		name: "liquid.aroma",
		prisma,
		map: async liquid => aromaSource().map(liquid?.aroma),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.liquid.findMany({
				distinct: ["aromaId"],
				where: merge(filter, {
					userId: source.user.required(),
					aroma: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								},
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								},
							}
						],
					}
				}),
				orderBy: [
					{aroma: {name: "asc"}},
				],
				select: {
					aroma: {
						include: {
							vendor: true,
							AromaTaste: {
								orderBy: {taste: {sort: "asc"}},
								include: {
									taste: true,
								}
							}
						}
					}
				},
			}),
		}
	});

	return source;
};
