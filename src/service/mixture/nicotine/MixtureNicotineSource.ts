import {IMixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const MixtureNicotineSource = (): IMixtureNicotineSource => {
	const source: IMixtureNicotineSource = Source<IMixtureNicotineSource>({
		name: "mixture.nicotine",
		prisma,
		map: async mixture => mixture ? ({
			label: `${mixture.nicotineToRound}`,
			value: mixture.nicotineToRound,
			nicotine: mixture.nicotineToRound,
		}) : undefined,
		source: {
			query: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.mixture.findMany({
				distinct: ["nicotineToRound"],
				where: filter,
				select: {
					nicotineToRound: true,
				},
				orderBy: [
					{nicotineToRound: "asc"},
				]
			}),
		},
	});

	return source;
};
