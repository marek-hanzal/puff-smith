import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {ILiquidBaseSource} from "@/puff-smith/service/liquid/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const LiquidBaseSource = (): ILiquidBaseSource => {
	const baseSource = singletonOf(() => BaseSource());

	const source: ILiquidBaseSource = Source<ILiquidBaseSource>({
		name: "liquid.base",
		prisma,
		map: baseSource().mapper.map,
		source: {
			query: async ({filter}) => source.prisma.base.findMany({
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
