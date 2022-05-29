import {MixtureNicotineCache} from "@/puff-smith/service/mixture/inventory/nicotine/cache";
import {IMixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const MixtureNicotineSource = (): IMixtureNicotineSource => {
	const source: IMixtureNicotineSource = Source<IMixtureNicotineSource>({
		name: "mixture.inventory.nicotine",
		prisma,
		map: async mixture => mixture ? ({
			label: `${mixture.nicotineToRound}`,
			value: mixture.nicotineToRound,
			nicotine: mixture.nicotineToRound,
		}) : undefined,
		cache: MixtureNicotineCache,
		source: {
			query: async () => {
				const userId = source.user.required();
				return source.prisma.mixture.findMany({
					distinct: ["nicotineToRound"],
					select: {
						nicotineToRound: true,
					},
					where: {
						AND: [
							{
								aroma: {
									AromaInventory: {
										some: {
											userId,
										},
									},
								},
							},
							{
								OR: [
									{base: null},
									{
										base: {
											BaseInventory: {
												some: {
													userId,
												},
											},
										},
									},
								]
							},
							{
								OR: [
									{booster: null},
									{
										booster: {
											BoosterInventory: {
												some: {
													userId,
												},
											},
										},
									}
								],
							},
						]
					},
					orderBy: [
						{nicotineToRound: "asc"},
					]
				});
			},
		},
	});

	return source;
};
