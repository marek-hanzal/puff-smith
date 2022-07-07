import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BoosterSource = (): IBoosterSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IBoosterSource = Source<IBoosterSource>({
		name: "booster",
		prisma,
		map: async booster => booster ? ({
			...booster,
			vendor: await vendorSource().mapper.map(booster.vendor),
		}) : null,
		source: {
			get: async id => source.prisma.booster.findUniqueOrThrow({
				where: {id},
				include: {
					vendor: true,
				},
			}),
			count: async ({filter: {fulltext} = {}}) => source.prisma.booster.count({
				where: {
					OR: fulltext ? [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							}
						},
						{
							vendor: {
								name: {
									contains: fulltext,
									mode: "insensitive",
								}
							}
						}
					] : undefined,
				}
			}),
			query: async ({filter: {fulltext} = {}, ...query}) => source.prisma.booster.findMany({
				where: {
					OR: fulltext ? [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							}
						},
						{
							vendor: {
								name: {
									contains: fulltext,
									mode: "insensitive",
								}
							}
						}
					] : undefined,
				},
				...pageOf(query),
				include: {
					vendor: true,
				}
			}),
			create: async ({vendor, vendorId, code, withInventory = false, ...booster}) => {
				const $create = async () => {
					const create = {
						...booster,
						code: code || codeService().code(),
						vendor: {
							connect: {
								name: vendor,
								id: vendorId,
							}
						},
					};
					try {
						return await source.prisma.booster.create({
							data: {
								...create,
								user: source.user.optional() ? {
									connect: {
										id: source.user.optional(),
									}
								} : undefined,
							},
							include: {
								vendor: true,
							}
						});
					} catch (e) {
						return onUnique(e, async () => source.prisma.booster.update({
							where: {
								id: (await source.prisma.booster.findFirstOrThrow({
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
								})).id,
							},
							data: create,
							include: {
								vendor: true,
							}
						}));
					}
				};
				const $booster = await $create();
				withInventory && await source.prisma.boosterInventory.createMany({
					data: [{
						code: codeService().code(),
						boosterId: $booster.id,
						userId: source.user.required(),
					}],
					skipDuplicates: true,
				});
				return $booster;
			},
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.booster.findMany({
					where,
					include: {
						vendor: true,
					},
				});
				await prisma.booster.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
