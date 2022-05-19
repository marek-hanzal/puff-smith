import {IAromaRepository, IAromaRepositoryCreate} from "@/puff-smith/service/aroma/interface";
import {memoTastes} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {memoVendorToMap} from "@/puff-smith/service/vendor/memoize";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const AromaRepository = (request: IAromaRepositoryCreate): IAromaRepository => {
	const codeService = singletonOf(() => CodeService());
	const tagRepository = singletonOf(() => TagRepository(request));
	const vendorRepository = singletonOf(() => VendorRepository(request));

	return Repository<IAromaRepository>({
		name: "aroma",
		source: request.prisma.aroma,
		create: async ({vendor, tastes, code, ...aroma}) => {
			const create = {
				...aroma,
				code: code || codeService().code(),
				name: `${aroma.name}`,
				vendor: {
					connect: {
						name: vendor,
					}
				},
				AromaTaste: {
					createMany: {
						data: tastes ? (await tagRepository().fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			};
			try {
				return await request.prisma.aroma.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => {
					const $aroma = await request.prisma.aroma.findFirst({
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
					await request.prisma.aromaTaste.deleteMany({
						where: {
							aromaId: $aroma.id,
						}
					});
					await memoTastes.delete($aroma.id, undefined);
					return request.prisma.aroma.update({
						where: {
							id: $aroma.id,
						},
						data: {
							...create,
							AromaTaste: {
								createMany: {
									data: tastes ? (await tagRepository().fetchCodes(tastes, "taste")).map(tag => ({
										tasteId: tag.id,
									})) : [],
								}
							},
						},
					});
				});
			}
		},
		mapper: async aroma => ({
			...aroma,
			vendor: await memoVendorToMap(aroma.vendorId, vendorRepository),
			tastes: await memoTastes(aroma.id, tagRepository),
		}),
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
						},
					}
				},
			],
		}),
	});
};
