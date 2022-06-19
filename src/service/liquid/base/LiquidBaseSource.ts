import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {ILiquidBaseSource} from "@/puff-smith/service/liquid/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LiquidBaseSource = (): ILiquidBaseSource => {
	const baseSource = singletonOf(() => BaseSource().ofSource(source));

	const source: ILiquidBaseSource = Source<ILiquidBaseSource>({
		name: "liquid.base",
		prisma,
		map: async liquid => baseSource().map(liquid?.base),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.liquid.findMany({
				distinct: ["baseId"],
				where: merge(filter, {
					userId: source.user.required(),
					base: {
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
					{base: {name: "asc"}},
				],
				select: {
					base: {
						include: {
							vendor: true,
						}
					}
				},
			}),
		}
	});

	return source;
};
