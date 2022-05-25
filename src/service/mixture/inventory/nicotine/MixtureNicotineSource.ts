import {IMixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const MixtureNicotineSource = (): IMixtureNicotineSource => {
	const source: IMixtureNicotineSource = Source<IMixtureNicotineSource>({
		name: "mixture.inventory..nicotine",
		prisma,
		map: async mixture => mixture ? ({
			label: `${mixture.nicotine}`,
			value: `${mixture.nicotine}`,
			nicotine: mixture.nicotine,
		}) : undefined,
		source: {
			query: async () => source.prisma.mixture.findMany({
				distinct: ["nicotineToRound"],
				where: {
					MixtureInventory: {
						some: {
							userId: source.user.required(),
						},
					},
				},
				orderBy: [
					{nicotineToRound: "asc"},
				]
			}),
		},
	});

	return source;
};
