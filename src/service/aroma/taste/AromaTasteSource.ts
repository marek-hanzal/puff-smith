import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaTasteSource = (): IAromaTasteSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IAromaTasteSource = Source<IAromaTasteSource>({
		name: "aroma.taste",
		prisma,
		map: aromaTaste => tagSource().map(aromaTaste?.taste),
		acl: {
			lock: true,
		},
		source: {
			count: async () => source.prisma.aromaTaste.count({
				distinct: ["tasteId"],
			}),
			query: async ({filter}) => source.prisma.aromaTaste.findMany({
				distinct: ["tasteId"],
				where: filter,
				include: {
					aroma: {
						include: {
							vendor: true,
						}
					},
					taste: true,
				},
				orderBy: [
					{taste: {sort: "asc"}},
				],
			})
		},
	});

	return source;
};
