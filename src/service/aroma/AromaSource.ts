import {MixtureJob} from "@/puff-smith/jobs/mixture/job";
import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {AromaMarketSource} from "@/puff-smith/service/aroma/market/AromaMarketSource";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {ClientError} from "@leight-core/api";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const AromaSource = (): IAromaSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const aromaMarketSource = singletonOf(() => AromaMarketSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IAromaSource = Source<IAromaSource>({
		name: "aroma",
		prisma,
		map: async aroma => aroma ? ({
			...aroma,
			vendor: await vendorSource().mapper.map(aroma.vendor),
			tastes: await tagSource().mapper.list(Promise.resolve(aroma.AromaTaste.map(({taste}) => taste))),
			tasteIds: aroma.AromaTaste.map(({taste}) => taste.id),
		}) : null,
		acl: {
			lock: true,
		},
		source: {
			clearCache: async () => {
				await aromaMarketSource().clearCache();
			},
			get: async id => source.prisma.aroma.findUnique({
				where: {id},
				include: {
					vendor: true,
					AromaTaste: {
						orderBy: {taste: {sort: "asc"}},
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
						orderBy: {taste: {sort: "asc"}},
						include: {
							taste: true,
						}
					}
				},
				...pageOf(query),
			}),
			create: async ({vendor, vendorId, tastes, tasteIds, code, withMixtures, withInventory = false, ...aroma}) => {
				const $canUpdate = source.user.hasAny([
					"*",
					"site.root",
					"aroma.patch",
				]);
				const $create = async () => {
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
								data: (await tagSource().fetchByCodes(tasteIds || tastes, "taste")).map(tag => ({
									tasteId: tag.id,
								})),
							}
						},
					};
					try {
						return await source.prisma.aroma.create({
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
								AromaTaste: {
									orderBy: {taste: {sort: "asc"}},
									include: {
										taste: true,
									}
								}
							},
						});
					} catch (e) {
						return onUnique(e, async () => {
							if (!$canUpdate) {
								throw new ClientError("Aroma already exists.", 409);
							}
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
											data: (await tagSource().fetchByCodes(tasteIds || tastes, "taste")).map(tag => ({
												tasteId: tag.id,
											})),
										}
									},
								},
								include: {
									vendor: true,
									AromaTaste: {
										orderBy: {taste: {sort: "asc"}},
										include: {
											taste: true,
										}
									}
								},
							});
						});
					}
				};
				const $aroma = await $create();
				withInventory && await source.prisma.aromaInventory.createMany({
					data: [{
						code: codeService().code(),
						aromaId: $aroma.id,
						userId: source.user.required(),
					}],
					skipDuplicates: true,
				});
				return $aroma;
			},
			patch: async ({vendor, vendorId, tastes, tasteIds, code, steep, withMixtures, ...patch}) => {
				await source.prisma.aromaTaste.deleteMany({
					where: {
						aromaId: patch.id,
					}
				});
				const aroma = source.prisma.aroma.update({
					where: {id: patch.id},
					data: {
						...patch,
						code: code || undefined,
						steep: steep || undefined,
						vendor: {
							connect: {
								name: vendor || undefined,
								id: vendorId || undefined,
							}
						},
						AromaTaste: {
							createMany: {
								data: tasteIds?.map(id => ({
									tasteId: id,
								})) || [],
							}
						},
					},
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							}
						}
					},
				});
				withMixtures && await MixtureJob.async({
					aromaId: patch.id,
				}, source.user.required());
				return aroma;
			},
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.aroma.findMany({
					where,
					include: {
						vendor: true,
						AromaTaste: {
							orderBy: {taste: {sort: "asc"}},
							include: {
								taste: true,
							}
						}
					},
				});
				await prisma.aroma.deleteMany({
					where,
				});
				return items;
			}
		},
	});

	return source;
};
