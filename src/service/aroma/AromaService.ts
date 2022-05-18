import {IAromaService, IAromaServiceCreate} from "@/puff-smith/service/aroma/interface";
import {memoTastes} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {memoVendorToMap} from "@/puff-smith/service/vendor/memoize";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const AromaService = (request: IAromaServiceCreate): IAromaService => {
	const codeService = singletonOf(() => CodeService());
	const tagService = singletonOf(() => TagService(request));
	const vendorService = singletonOf(() => VendorService(request));

	return RepositoryService<IAromaService>({
		name: "aroma",
		source: request.prisma.aroma,
		create: async ({vendor, tastes, code, ...aroma}) => request.prisma.aroma.create({
			data: {
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
						data: tastes ? (await tagService().fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			},
		}),
		onUnique: async ({vendor, tastes, name, ...create}) => {
			const $aroma = await request.prisma.aroma.findFirst({
				where: {
					name: `${name}`,
					vendor: {
						name: vendor,
					}
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
							data: tastes ? (await tagService().fetchCodes(tastes, "taste")).map(tag => ({
								tasteId: tag.id,
							})) : [],
						}
					},
				},
			});
		},
		mapper: async aroma => ({
			...aroma,
			vendor: await memoVendorToMap(aroma.vendorId, vendorService),
			tastes: await memoTastes(aroma.id, tagService),
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
