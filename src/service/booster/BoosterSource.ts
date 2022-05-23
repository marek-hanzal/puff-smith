import {IBoosterSource, IBoosterSourceCreate} from "@/puff-smith/service/booster/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const BoosterSource = (request: IBoosterSourceCreate): IBoosterSource => {
	const codeService = singletonOf(() => CodeService());
	const vendorSource = singletonOf(() => VendorRepository(request));

	return Source<IBoosterSource>({
		name: "booster",
		source: request.prisma.booster,
		mapper: async booster => ({
			...booster,
			vendor: await vendorSource().toMap(booster.vendorId),
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
				return await request.prisma.booster.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => request.prisma.booster.update({
					where: {
						id: (await request.prisma.booster.findFirst({
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
				}));
			}
		},
		toFilter: ({fulltext, ...filter} = {}) => deepmerge(filter, {
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
						}
					}
				}
			]
		}),
	});
};
