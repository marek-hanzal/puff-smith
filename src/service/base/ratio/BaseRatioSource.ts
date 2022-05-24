import {IBaseRatioSource} from "@/puff-smith/service/base/ratio/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BaseRatioSource = (): IBaseRatioSource => {
	const source: IBaseRatioSource = Source<IBaseRatioSource>({
		name: "base.ratio",
		prisma,
		source: {
			query: async () => source.prisma.base.findMany({
				distinct: ["pg", "vg"],
				orderBy: [
					{vg: "asc"},
				],
				include: {
					vendor: true,
				}
			}),
		},
		map: async ({pg, vg}) => ({
			label: `${vg}/${pg}`,
			value: `${vg}/${pg}`,
			vg,
			pg,
		}),
	});

	return source;
};
