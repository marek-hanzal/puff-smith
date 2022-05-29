import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {AromaMarketSource} from "@/puff-smith/service/aroma/market/AromaMarketSource";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AromaSource = (): IAromaSource => {
	const tagSource = singletonOf(() => TagSource());
	const vendorSource = singletonOf(() => VendorSource());
	const codeService = singletonOf(() => CodeService());
	const aromaMarketSource = singletonOf(() => AromaMarketSource());

	const source: IAromaSource = Source<IAromaSource>({
		name: "aroma",
		prisma,
		map: async aroma => aroma ? ({
			...aroma,
			vendor: await vendorSource().mapper.map(aroma.vendor),
			tastes: await tagSource().mapper.list(Promise.resolve(aroma.AromaTaste.map(({taste}) => taste))),
		}) : null,
		source: {
			clearCache: async () => {
				await aromaMarketSource().clearCache();
			},
			get: async id => source.prisma.aroma.findUnique({
				where: {id},
				include: {
					vendor: true,
					AromaTaste: {
						include: {
							taste: true,
						}
					}
				},
				rejectOnNotFound: true,
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.aroma.count({
				where: merge(filter || {}, {
					OR: [
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
								},
							}
						},
					],
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.aroma.findMany({
				where: merge(filter || {}, {
					OR: [
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
								},
							}
						},
					],
				}),
				include: {
					vendor: true,
					AromaTaste: {
						include: {
							taste: true,
						}
					}
				},
				...pageOf(query),
			}),
			create: async ({vendor, vendorId, tastes, code, ...aroma}) => {
				const create = {
					...aroma,
					code: code || codeService().code(),
					name: `${aroma.name}`,
					vendor: {
						connect: {
							name: vendor,
							id: vendorId,
						}
					},
					AromaTaste: {
						createMany: {
							data: tastes ? (await tagSource().fetchCodes(tastes, "taste")).map(tag => ({
								tasteId: tag.id,
							})) : [],
						}
					},
				};
				try {
					return await source.prisma.aroma.create({
						data: create,
						include: {
							vendor: true,
							AromaTaste: {
								include: {
									taste: true,
								}
							}
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $aroma = await source.prisma.aroma.findFirst({
							where: {
								OR: [
									{
										name: `${create.name}`,
										vendor: {
											name: vendor,
										}
									},
									{
										code: create.code,
									}
								],
							},
							rejectOnNotFound: true,
						});
						await source.prisma.aromaTaste.deleteMany({
							where: {
								aromaId: $aroma.id,
							}
						});
						return source.prisma.aroma.update({
							where: {
								id: $aroma.id,
							},
							data: {
								...create,
								AromaTaste: {
									createMany: {
										data: tastes ? (await tagSource().fetchCodes(tastes, "taste")).map(tag => ({
											tasteId: tag.id,
										})) : [],
									}
								},
							},
							include: {
								vendor: true,
								AromaTaste: {
									include: {
										taste: true,
									}
								}
							},
						});
					});
				}
			}
		},
	});

	return source;
};
