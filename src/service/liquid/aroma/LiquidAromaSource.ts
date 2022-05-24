import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {ILiquidAromaSource} from "@/puff-smith/service/liquid/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const LiquidAromaSource = (): ILiquidAromaSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: ILiquidAromaSource = Source<ILiquidAromaSource>({
		name: "liquid.aroma",
		prisma,
		map: aromaSource().mapper.map,
		source: {
			query: async ({filter}) => source.prisma.aroma.findMany({
				where: {
					Liquid: {
						some: {
							userId: source.user.required(),
						},
					},
					name: {
						contains: filter?.fulltext,
						mode: "insensitive",
					},
					vendor: {
						name: {
							contains: filter?.fulltext,
							mode: "insensitive",
						},
					},
				},
				orderBy: [
					{name: "asc"},
				],
				include: {
					vendor: true,
				},
			}),
		}
	});

	return source;
};
