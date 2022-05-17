import {IAtomizerService, IAtomizerServiceCreate} from "@/puff-smith/service/atomizer/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";
import {boolean} from "boolean";

export const AtomizerService = (request: IAtomizerServiceCreate) => {
	const vendorService = singletonOf(() => VendorService(request));
	const tagService = singletonOf(() => TagService(request));
	const codeService = singletonOf(() => CodeService());

	return RepositoryService<IAtomizerService>({
		name: "atomizer",
		source: request.prisma.atomizer,
		mapper: async atomizer => ({
			...atomizer,
			vendor: await vendorService().toMap(atomizer.vendorId),
			draws: await tagService().list(request.prisma.tag.findMany({
				where: {
					AtomizerDraw: {
						some: {
							atomizerId: atomizer.id,
						}
					}
				},
				orderBy: {
					sort: "asc",
				}
			})),
		}),
		create: async ({draws, type, vendor, code, ...atomizer}) => request.prisma.atomizer.create({
			data: {
				...atomizer,
				code: code || codeService().code(),
				dualCoil: boolean(atomizer?.dualCoil),
				squonk: boolean(atomizer?.squonk),
				cost: atomizer.cost ? parseFloat(atomizer.cost) : undefined,
				vendor: {
					connect: {
						name: vendor,
					}
				},
				type: {
					connect: {
						code_group: {
							code: `${type}`,
							group: "atomizer-type",
						}
					}
				},
				AtomizerDraw: {
					createMany: {
						data: draws ? (await tagService().fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			},
		}),
		onUnique: async ({vendor, type, draws, ...create}) => {
			const $atomizer = (await request.prisma.atomizer.findFirst({
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
			await request.prisma.atomizerDraw.deleteMany({
				where: {
					atomizerId: $atomizer.id,
				}
			});
			return request.prisma.atomizer.update({
				where: {
					id: $atomizer.id,
				},
				data: {
					...create,
					dualCoil: boolean(create?.dualCoil),
					squonk: boolean(create?.squonk),
					cost: create.cost ? parseFloat(create.cost) : null,
					type: {
						connect: {
							code_group: {
								code: type,
								group: "atomizer-type",
							}
						}
					},
					AtomizerDraw: {
						createMany: {
							data: draws ? (await tagService().fetchCodes(draws, "draw")).map(tag => ({
								drawId: tag.id,
							})) : [],
						}
					},
				},
			});
		}
	});
};
