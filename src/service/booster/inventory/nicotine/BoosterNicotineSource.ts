import {IBoosterNicotineSource} from "@/puff-smith/service/booster/nicotine/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BoosterNicotineSource = (): IBoosterNicotineSource => {
	const source: IBoosterNicotineSource = Source<IBoosterNicotineSource>({
		name: "booster.nicotine",
		prisma,
		source: {
			query: async () => source.prisma.booster.findMany({
				distinct: ["pg", "vg"],
				orderBy: [
					{vg: "asc"},
				],
				where: {
					BoosterInventory: {
						some: {
							userId: source.user.required(),
						}
					}
				},
				include: {
					vendor: true,
				}
			}),
		},
		map: async ({nicotine}) => ({
			label: `${nicotine}`,
			value: `${nicotine}`,
			nicotine: nicotine,
		}),
	});

	return source;
};
