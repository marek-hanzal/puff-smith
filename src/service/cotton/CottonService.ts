import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICottonService, ICottonServiceCreate} from "@/puff-smith/service/cotton/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const CottonService = (request: ICottonServiceCreate = ServiceCreate()): ICottonService => {
	const vendorService = singletonOf(() => VendorService(request));
	const tagService = singletonOf(() => TagService(request));
	const codeService = singletonOf(() => CodeService());

	return RepositoryService<ICottonService>({
		name: "cotton",
		source: request.prisma.cotton,
		mapper: async cotton => ({
			...cotton,
			vendor: await vendorService().toMap(cotton.vendorId),
			draws: await tagService().list(request.prisma.tag.findMany({
				where: {
					CottonDraw: {
						some: {
							cottonId: cotton.id,
						}
					}
				}
			})),
		}),
		create: async ({vendor, draws, code, ...cotton}) => request.prisma.cotton.create({
			data: {
				...cotton,
				code: code || codeService().code(),
				vendor: {
					connect: {
						name: vendor,
					}
				},
				CottonDraw: {
					createMany: {
						data: draws ? (await tagService().fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			},
		}),
		onUnique: async ({vendor, draws, ...cotton}) => {
			const $cotton = (await request.prisma.cotton.findFirst({
				where: {
					OR: [
						{
							name: cotton.name,
							vendor: {
								name: vendor,
							},
						},
						{
							code: cotton.code,
						}
					]
				},
				rejectOnNotFound: true,
			}));
			await request.prisma.cottonDraw.deleteMany({
				where: {
					cottonId: $cotton.id,
				}
			});

			return request.prisma.cotton.update({
				where: {
					id: $cotton.id,
				},
				data: {
					...cotton,
					CottonDraw: {
						createMany: {
							data: draws ? (await tagService().fetchCodes(draws, "draw")).map(tag => ({
								drawId: tag.id,
							})) : [],
						}
					},
				},
			});
		},
	});
};
