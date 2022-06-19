import {IAtomizerDrawSource} from "@/puff-smith/service/atomizer/inventory/draw/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const AtomizerDrawSource = (): IAtomizerDrawSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IAtomizerDrawSource = Source<IAtomizerDrawSource>({
		name: "atomizer.inventory.draw",
		prisma,
		map: async atomizerDraw => tagSource().map(atomizerDraw?.draw),
		acl: {
			lock: true,
		},
		source: {
			count: async () => source.prisma.atomizerDraw.count({
				distinct: ["drawId"],
				where: {
					atomizer: {
						AtomizerInventory: {
							some: {
								userId: source.user.required(),
							}
						}
					}
				},
			}),
			query: async () => source.prisma.atomizerDraw.findMany({
				distinct: ["drawId"],
				include: {
					draw: true,
				},
				where: {
					atomizer: {
						AtomizerInventory: {
							some: {
								userId: source.user.required(),

							}
						}
					}
				},
				orderBy: [
					{draw: {sort: "asc"}},
				],
			}),
		},
	});

	return source;
};
