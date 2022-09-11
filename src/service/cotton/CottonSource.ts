import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonSource = (): ICottonSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ICottonSource = Source<ICottonSource>({
		name: "cotton",
		prisma,
		map: async cotton => {
			if (!cotton) {
				return null;
			}
			const {CottonDraw, ...$cotton} = cotton;
			return {
				...$cotton,
				vendor: await vendorSource().mapper.map(cotton.vendor),
				draws: await tagSource().mapper.list(Promise.resolve(CottonDraw.map(({draw}) => draw))),
			};
		},
		source: {
			get: async id => source.prisma.cotton.findUniqueOrThrow({
				where: {id},
				include: {
					vendor: true,
					CottonDraw: {
						orderBy: {draw: {sort: "asc"}},
						include: {
							draw: true,
						}
					}
				},
			}),
			create: async ({vendor, vendorId, draws, code, withInventory = false, ...cotton}) => {
				const $create = async () => {
					const create = {
						...cotton,
						code: code || codeService().code(),
						vendor: {
							connect: {
								name: vendor,
								id: vendorId,
							}
						},
						CottonDraw: {
							createMany: {
								data: draws ? (await tagSource().fetchByCodes(draws, "draw")).map(tag => ({
									drawId: tag.id,
								})) : [],
							}
						},
					};
					try {
						return await source.prisma.cotton.create({
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
								CottonDraw: {
									orderBy: {draw: {sort: "asc"}},
									include: {
										draw: true,
									}
								}
							},
						});
					} catch (e) {
						return onUnique(e, async () => {
							const $cotton = (await source.prisma.cotton.findFirstOrThrow({
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
							}));
							await source.prisma.cottonDraw.deleteMany({
								where: {
									cottonId: $cotton.id,
								}
							});
							return source.prisma.cotton.update({
								where: {
									id: $cotton.id,
								},
								data: create,
								include: {
									vendor: true,
									CottonDraw: {
										orderBy: {draw: {sort: "asc"}},
										include: {
											draw: true,
										}
									}
								},
							});
						});
					}
				};
				const $cotton = await $create();
				withInventory && source.prisma.cottonInventory.createMany({
					data: [{
						code: codeService().code(),
						cottonId: $cotton.id,
						userId: source.user.required(),
					}],
					skipDuplicates: true,
				});
				return $cotton;
			},
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				return prisma.$transaction(async prisma => {
					const items = await prisma.cotton.findMany({
						where,
						include: {
							vendor: true,
							CottonDraw: {
								orderBy: {draw: {sort: "asc"}},
								include: {
									draw: true,
								}
							}
						},
					});
					await prisma.cotton.deleteMany({
						where,
					});
					return items;
				});
			},
		},
	});

	return source;
};
