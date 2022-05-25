import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterSource = (): IBoosterSource => {
	const codeService = singletonOf(() => CodeService());
	const vendorSource = singletonOf(() => VendorSource());

	const source: IBoosterSource = Source<IBoosterSource>({
		name: "booster",
		prisma,
		map: async booster => booster ? ({
			...booster,
			vendor: await vendorSource().mapper.map(booster.vendor),
		}) : undefined,
		source: {
			count: async ({filter}) => source.prisma.booster.count({
				where: {
					OR: [
						{
							name: {
								contains: filter?.fulltext,
								mode: "insensitive",
							}
						},
						{
							vendor: {
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								}
							}
						}
					]
				}
			}),
			query: async ({filter, ...query}) => source.prisma.booster.findMany({
				where: {
					OR: [
						{
							name: {
								contains: filter?.fulltext,
								mode: "insensitive",
							}
						},
						{
							vendor: {
								name: {
									contains: filter?.fulltext,
									mode: "insensitive",
								}
							}
						}
					]
				},
				...pageOf(query),
				include: {
					vendor: true,
				}
			}),
			create: async ({vendor, code, ...booster}) => {
				const create = {
					...booster,
					code: code || codeService().code(),
					vendor: {
						connect: {
							name: vendor,
						}
					},
				};
				try {
					return await source.prisma.booster.create({
						data: create,
						include: {
							vendor: true,
						}
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.booster.update({
						where: {
							id: (await source.prisma.booster.findFirst({
								where: {
									OR: [
										{
											name: create.name,
											vendor: {
												name: vendor,
											},
										},
										{
											code: create.code,
										}
									]
								},
								rejectOnNotFound: true,
							})).id,
						},
						data: create,
						include: {
							vendor: true,
						}
					}));
				}
			},
		},
	});

	return source;
};
