import {ServiceCreate} from "@/puff-smith/service";
import {IAromaService, IAromaServiceCreate} from "@/puff-smith/service/aroma/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";
import deepmerge from "deepmerge";

export const AromaService = (request: IAromaServiceCreate = ServiceCreate()): IAromaService => RepositoryService<IAromaService>({
	name: "aroma",
	source: request.prisma.aroma,
	create: async ({vendor, tastes, ...aroma}) => request.prisma.aroma.create({
		data: {
			...aroma,
			name: `${aroma.name}`,
			vendor: {
				connect: {
					name: vendor,
				}
			},
			AromaTaste: {
				createMany: {
					data: tastes ? (await TagService(request).fetchCodes(tastes, "taste")).map(tag => ({
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
		return request.prisma.aroma.update({
			where: {
				id: $aroma.id,
			},
			data: {
				...create,
				AromaTaste: {
					createMany: {
						data: tastes ? (await TagService(request).fetchCodes(tastes, "taste")).map(tag => ({
							tasteId: tag.id,
						})) : [],
					}
				},
			},
		});
	},
	mapper: async aroma => ({
		...aroma,
		vendor: await VendorService(request).toMap(aroma.vendorId),
		tastes: await TagService(request).list(request.prisma.tag.findMany({
			where: {
				AromaTaste: {
					some: {
						aromaId: aroma.id,
					}
				}
			},
			orderBy: {
				sort: "asc",
			}
		})),
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
