import {ICoilDrawSource} from "@/puff-smith/service/coil/inventory/draw/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CoilDrawSource = (): ICoilDrawSource => {
	const tagSource = singletonOf(() => TagSource());

	const source: ICoilDrawSource = Source<ICoilDrawSource>({
		name: "coil.inventory.draw",
		prisma,
		map: async coilDraw => tagSource().map(coilDraw?.draw),
		source: {
			count: async () => source.prisma.coilDraw.count({
				distinct: ["drawId"],
				where: {
					coil: {
						wire: {
							WireInventory: {
								some: {
									userId: source.user.required(),
								}
							},
						},
					},
				},
			}),
			query: async () => source.prisma.coilDraw.findMany({
				distinct: ["drawId"],
				include: {
					draw: true,
				},
				where: {
					coil: {
						wire: {
							WireInventory: {
								some: {
									userId: source.user.required(),
								}
							},
						},
					},
				},
				orderBy: [
					{draw: {sort: "asc"}},
				],
			}),
		},
	});

	return source;
};
