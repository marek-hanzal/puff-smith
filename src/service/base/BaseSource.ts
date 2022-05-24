import {IBaseSource} from "@/puff-smith/service/base/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const BaseSource = (): IBaseSource => {
	const codeService = singletonOf(() => CodeService());
	const vendorSource = singletonOf(() => VendorSource());

	const source: IBaseSource = Source<IBaseSource>({
		name: "base",
		prisma,
		map: async base => ({
			...base,
			vendor: await vendorSource().mapper.map(base.vendor),
		}),
		source: {
			count: async ({filter}) => source.prisma.base.count({
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
			create: async ({vendor, code, ...base}) => {
				const create = {
					...base,
					code: code || codeService().code(),
					vendor: {
						connect: {
							name: vendor,
						}
					},
				};
				try {
					return await source.prisma.base.create({
						data: create,
						include: {
							vendor: true,
						},
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.base.update({
						where: {
							id: (await source.prisma.base.findFirst({
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
						data: base,
						include: {
							vendor: true,
						},
					}));
				}
			},
		},
	});

	return source;
};
