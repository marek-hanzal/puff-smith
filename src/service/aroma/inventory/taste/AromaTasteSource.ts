import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AromaTasteSource = (): IAromaTasteSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IAromaTasteSource = Source<IAromaTasteSource>({
		name: "aroma.inventory.taste",
		prisma,
		map: aromaTaste => tagSource().map(aromaTaste?.taste),
		source: {
			count: async () => source.prisma.aromaTaste.count({
				distinct: ["tasteId"],
			}),
			query: async () => prisma.aromaTaste.findMany({
				distinct: ["tasteId"],
				include: {
					aroma: {
						include: {
							vendor: true,
						}
					},
					taste: true,
				},
				where: {
					aroma: {
						AromaInventory: {
							some: {
								userId: source.user.required(),
							},
						},
					}
				},
				orderBy: [
					{taste: {sort: "asc"}},
				],
			})
		},
	});

	return source;
};
