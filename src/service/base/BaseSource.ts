import {IBaseSource} from "@/puff-smith/service/base/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BaseSource = (): IBaseSource => {
	const vendorSource = singletonOf(() => VendorSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: IBaseSource = Source<IBaseSource>({
		name: "base",
		prisma,
		map: async base => ({
			...base,
			vendor: await vendorSource().map(base.vendor),
		}),
		source: {
			get: async id => source.prisma.base.findUniqueOrThrow({
				where: {id},
				include: {
					vendor: true,
				},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.base.count({
				where: merge(filter, {
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
			query: async ({filter, ...query}) => source.prisma.base.findMany({
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
								},
							}
						},
					],
				},
				...pageOf(query),
				include: {
					vendor: true,
				},
			}),
			create: async ({vendor, vendorId, code, withInventory, ...base}) => {
				const $create = async () => {
					const create = {
						...base,
						code: code || codeService().code(),
						vendor: {
							connect: {
								name: vendor,
								id: vendorId,
							}
						},
					};
					try {
						return await source.prisma.base.create({
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
							},
						});
					} catch (e) {
						return onUnique(e, async () => source.prisma.base.update({
							where: {
								id: (await source.prisma.base.findFirstOrThrow({
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
							data: base,
							include: {
								vendor: true,
							},
						}));
					}
				};
				const $base = await $create();
				withInventory && await source.prisma.baseInventory.createMany({
					data: [{
						code: codeService().code(),
						baseId: $base.id,
						userId: source.user.required(),
					}],
					skipDuplicates: true,
				});
				return $base;
			},
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.base.findMany({
					where,
					include: {
						vendor: true,
					},
				});
				await prisma.base.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
