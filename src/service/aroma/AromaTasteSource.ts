import {IAromaTasteSource} from "@/puff-smith/service/aroma/inventory/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {countOf, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaTasteSource = (): IAromaTasteSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: IAromaTasteSource = Source<IAromaTasteSource>({
		name: "aroma-taste",
		prisma,
		get: async id => prisma.aromaTaste.findUnique({
			where: {id},
			include: {
				aroma: {
					include: {
						vendor: true,
					}
				},
				taste: true,
			},
			rejectOnNotFound: true,
		}),
		find: async query => prisma.aromaTaste.findFirst({
			where: source.filter(query.filter),
			include: {
				aroma: {
					include: {
						vendor: true,
					}
				},
				taste: true,
			},
			...pageOf(query),
			rejectOnNotFound: true,
		}),
		count: countOf(prisma.aromaTaste.count),
		query: async query => prisma.aromaTaste.findMany({
			distinct: ["tasteId"],
			include: {
				aroma: {
					include: {
						vendor: true,
					}
				},
				taste: true,
			},
			where: source.filter(query.filter),
			orderBy: [
				{taste: {sort: "asc"}},
			],
		}),
		map: ({taste}) => tagSource().mapper.map(taste),
	});

	return source;
};
