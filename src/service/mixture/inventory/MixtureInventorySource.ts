import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureSource} from "@/puff-smith/service/mixture/MixtureSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MixtureInventorySource = (): IMixtureInventorySource => {
	const mixtureSource = singletonOf(() => MixtureSource());

	const source: IMixtureInventorySource = Source<IMixtureInventorySource>({
		name: "mixture.inventory",
		prisma,
		map: async mixtureInventory => mixtureInventory ? ({
			...mixtureInventory,
			mixture: await mixtureSource().mapper.map(mixtureInventory.mixture)
		}) : undefined,
		source: {
			create: async mixtureInventory => {
				try {
					return await source.prisma.mixtureInventory.create({
						data: {
							...mixtureInventory,
							userId: source.user.required(),
						},
						include: {
							vendor: true,
							base: {
								include: {
									vendor: true,
								}
							},
							booster: {
								include: {
									vendor: true,
								}
							},
							aroma: {
								include: {
									vendor: true,
								}
							},
							mixture: {
								include: {
									vendor: true,
									base: {
										include: {
											vendor: true,
										}
									},
									booster: {
										include: {
											vendor: true,
										}
									},
									aroma: {
										include: {
											vendor: true,
										}
									},
								}
							},
						},
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.mixtureInventory.findFirst({
						where: {
							...mixtureInventory,
							userId: source.user.required(),
						},
						include: {
							vendor: true,
							base: {
								include: {
									vendor: true,
								}
							},
							booster: {
								include: {
									vendor: true,
								}
							},
							aroma: {
								include: {
									vendor: true,
								}
							},
							mixture: {
								include: {
									vendor: true,
									base: {
										include: {
											vendor: true,
										}
									},
									booster: {
										include: {
											vendor: true,
										}
									},
									aroma: {
										include: {
											vendor: true,
										}
									},
								}
							},
						},
						rejectOnNotFound: true,
					}));
				}
			},
		}
	});

	return source;
};
