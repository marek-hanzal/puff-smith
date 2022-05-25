import {IBaseRatioSource} from "@/puff-smith/service/base/ratio/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BaseRatioSource = (): IBaseRatioSource => {
	const source: IBaseRatioSource = Source<IBaseRatioSource>({
		name: "base.inventory.ratio",
		prisma,
		map: async base => base ? ({
			label: `${base.vg}/${base.pg}`,
			value: `${base.vg}/${base.pg}`,
			vg: base.vg,
			pg: base.pg,
		}) : undefined,
		source: {
			query: async () => source.prisma.base.findMany({
				distinct: ["pg", "vg"],
				select: {
					vg: true,
					pg: true,
				},
				where: {
					BaseInventory: {
						some: {
							userId: source.user.required(),
						}
					},
				},
				orderBy: [
					{vg: "asc"},
				],
			}),
		},
	});

	return source;
};
