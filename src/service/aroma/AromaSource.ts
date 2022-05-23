import {IAroma, IAromaCreate, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {memoTastes} from "@/puff-smith/service/aroma/memoize";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {memoVendorToMap} from "@/puff-smith/service/vendor/memoize";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {Aroma} from "@prisma/client";
import deepmerge from "deepmerge";

export const AromaSource = () => {
	const codeService = singletonOf(() => CodeService());
	const tagSource = singletonOf(() => TagSource());
	const vendorSource = singletonOf(() => VendorRepository());

	return Source<IAromaCreate, Aroma, IAroma, IAromaQuery>({
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
						data: tastes ? (await tagSource().fetchCodes(tastes, "taste")).map(tag => ({
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
									data: tastes ? (await tagSource().fetchCodes(tastes, "taste")).map(tag => ({
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
			vendor: await memoVendorToMap(aroma.vendorId, vendorSource),
			tastes: await memoTastes(aroma.id, tagSource),
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
