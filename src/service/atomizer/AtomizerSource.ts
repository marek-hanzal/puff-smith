import {IAtomizerSource, IAtomizerSourceCreate} from "@/puff-smith/service/atomizer/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagSource} from "@/puff-smith/service/tag/TagRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {boolean} from "boolean";

export const AtomizerSource = (request: IAtomizerSourceCreate): IAtomizerSource => {
	const vendorSource = singletonOf(() => VendorRepository(request));
	const tagSource = singletonOf(() => TagSource(request));
	const codeService = singletonOf(() => CodeService());

	return Source<IAtomizerSource>({
		name: "atomizer",
		source: request.prisma.atomizer,
		mapper: async atomizer => ({
			...atomizer,
			vendor: await vendorSource().toMap(atomizer.vendorId),
			draws: await tagSource().list(request.prisma.tag.findMany({
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
		create: async ({draws, type, vendor, code, ...atomizer}) => {
			const create = {
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
						data: draws ? (await tagSource().fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			};
			try {
				return await request.prisma.atomizer.create({
					data: create,
				});
			} catch (e) {
				return onUnique(e, async () => {
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
						data: create,
					});
				});
			}
		},
	});
};
