import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IMixtureAromaSource} from "@/puff-smith/service/mixture/aroma/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const MixtureAromaSource = (): IMixtureAromaSource => {
	const aromaSource = singletonOf(() => AromaSource());

	const source: IMixtureAromaSource = Source<IMixtureAromaSource>({
		name: "mixture.aroma",
		prisma,
		map: async ({aroma}) => aromaSource().mapper.map(aroma),
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixture.findMany({
				distinct: ["aromaId"],
				where: deepmerge(filter, {
					aroma: {
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
					{aroma: {name: "asc"}},
				],
				include: {
					base: {
						include: {
							vendor: true,
						}
					},
					aroma: {
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
