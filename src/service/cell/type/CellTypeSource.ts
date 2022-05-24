import {ICellTypeSource} from "@/puff-smith/service/cell/type/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CellTypeSource = (): ICellTypeSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: ICellTypeSource = Source<ICellTypeSource>({
		name: "cell.type",
		prisma,
		source: {
			count: async () => source.prisma.cell.count({
				distinct: ["typeId"],
			}),
			query: async () => source.prisma.cell.findMany({
				distinct: ["typeId"],
				orderBy: [
					{type: {sort: "asc"}},
				],
				include: {
					vendor: true,
					type: true,
				}
			}),
		},
		map: async ({type}) => tagSource().mapper.map(type),
	});

	return source;
};
