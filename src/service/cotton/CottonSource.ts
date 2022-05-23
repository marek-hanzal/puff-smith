import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ICottonSource, ICottonSourceCreate} from "@/puff-smith/service/cotton/interface";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const CottonSource = (request: ICottonSourceCreate): ICottonSource => {
	const vendorSource = singletonOf(() => VendorRepository(request));
	const tagSource = singletonOf(() => TagSource(request));
	const codeService = singletonOf(() => CodeService());

	return Source<ICottonSource>({
		name: "cotton",
		source: request.prisma.cotton,
		mapper: async cotton => ({
			...cotton,
			vendor: await vendorSource().toMap(cotton.vendorId),
			draws: await tagSource().list(request.prisma.tag.findMany({
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
						data: draws ? (await tagSource().fetchCodes(draws, "draw")).map(tag => ({
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
