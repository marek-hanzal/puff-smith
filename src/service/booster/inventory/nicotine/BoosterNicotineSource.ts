import {IBoosterNicotineSource} from "@/puff-smith/service/booster/nicotine/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const BoosterNicotineSource = (): IBoosterNicotineSource => {
	const source: IBoosterNicotineSource = Source<IBoosterNicotineSource>({
		name: "booster.nicotine",
		prisma,
		map: async booster => ({
			label: `${booster.nicotine}`,
			value: booster.nicotine,
			nicotine: booster.nicotine,
		}),
		source: {
			query: async () => source.prisma.booster.findMany({
				distinct: ["nicotine"],
				select: {
					nicotine: true,
				},
				orderBy: [
					{nicotine: "asc"},
				],
				where: {
					BoosterInventory: {
						some: {
							userId: source.user.required(),
						}
					}
				},
			}),
		},
	});

	return source;
};
