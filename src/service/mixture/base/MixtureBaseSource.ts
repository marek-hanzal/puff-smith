import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IMixtureBaseSource} from "@/puff-smith/service/mixture/base/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const MixtureBaseSource = (): IMixtureBaseSource => {
	const baseSource = singletonOf(() => BaseSource().ofSource(source));

	const source: IMixtureBaseSource = Source<IMixtureBaseSource>({
		name: "mixture.base",
		prisma,
		map: async mixture => baseSource().map(mixture?.base),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixture.findMany({
				distinct: ["baseId"],
				where: deepmerge(filter, {
					NOT: {
						baseId: null,
					},
					base: {
						OR: [
							{
								name: {
									contains: fulltext,
									mode: "insensitive",
								}
							},
							{
								vendor: {
									name: {
										contains: fulltext,
										mode: "insensitive",
									},
								}
							},
						],
					},
				}),
				orderBy: [
					{base: {name: "asc"}},
				],
				select: {
					base: {
						include: {
							vendor: true,
						}
					},
				},
			}),
		}
	});

	return source;
};
