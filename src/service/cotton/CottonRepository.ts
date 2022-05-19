import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICottonRepository, ICottonRepositoryCreate} from "@/puff-smith/service/cotton/interface";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonRepository = (request: ICottonRepositoryCreate): ICottonRepository => {
	const vendorRepository = singletonOf(() => VendorRepository(request));
	const tagRepository = singletonOf(() => TagRepository(request));
	const codeService = singletonOf(() => CodeService());

	return Repository<ICottonRepository>({
		name: "cotton",
		source: request.prisma.cotton,
		mapper: async cotton => ({
			...cotton,
			vendor: await vendorRepository().toMap(cotton.vendorId),
			draws: await tagRepository().list(request.prisma.tag.findMany({
				where: {
					CottonDraw: {
						some: {
							cottonId: cotton.id,
						}
					}
				}
			})),
		}),
		create: async ({vendor, draws, code, ...cotton}) => {
			const create = {
				...cotton,
				code: code || codeService().code(),
				vendor: {
					connect: {
						name: vendor,
					}
				},
				CottonDraw: {
					createMany: {
						data: draws ? (await tagRepository().fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			};
			try {
				return await request.prisma.cotton.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => {
					const $cotton = (await request.prisma.cotton.findFirst({
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
						data: create,
					});
				});
			}
		},
	});
};
