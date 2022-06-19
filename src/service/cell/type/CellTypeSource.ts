import {ICellTypeSource} from "@/puff-smith/service/cell/type/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellTypeSource = (): ICellTypeSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: ICellTypeSource = Source<ICellTypeSource>({
		name: "cell.type",
		prisma,
		map: async cell => tagSource().map(cell?.type),
		source: {
			count: async () => source.prisma.cell.count({
				distinct: ["typeId"],
			}),
			query: async () => source.prisma.cell.findMany({
				distinct: ["typeId"],
				orderBy: [
					{type: {sort: "asc"}},
				],
				select: {
					type: true,
				}
			}),
		},
	});

	return source;
};
