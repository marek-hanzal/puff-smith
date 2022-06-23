import {IModCellSource} from "@/puff-smith/service/mod/cell/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const ModCellSource = (): IModCellSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IModCellSource = Source<IModCellSource>({
		name: "mod.cell",
		prisma,
		map: async modCell => tagSource().map(modCell?.cell),
		source: {
			query: async () => source.prisma.modCell.findMany({
				distinct: ["cellId"],
				orderBy: [
					{cell: {sort: "asc"}},
				],
				include: {
					cell: true,
				}
			})
		}
	});

	return source;
};
