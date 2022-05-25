import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {onUnique, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import {boolean} from "boolean";

export const AtomizerSource = (): IAtomizerSource => {
	const vendorSource = singletonOf(() => VendorSource());
	const tagSource = singletonOf(() => TagSource());
	const codeService = singletonOf(() => CodeService());

	const source: IAtomizerSource = Source<IAtomizerSource>({
		name: "atomizer",
		prisma,
		map: async atomizer => atomizer ? ({
			...atomizer,
			vendor: await vendorSource().mapper.map(atomizer.vendor),
			draws: await tagSource().mapper.list(source.prisma.tag.findMany({
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
		}) : undefined,
		source: {
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
					return await source.prisma.atomizer.create({
						data: create,
						include: {
							vendor: true,
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						const $atomizer = (await source.prisma.atomizer.findFirst({
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
						await source.prisma.atomizerDraw.deleteMany({
							where: {
								atomizerId: $atomizer.id,
							}
						});
						return source.prisma.atomizer.update({
							where: {
								id: $atomizer.id,
							},
							data: create,
							include: {
								vendor: true,
							},
						});
					});
				}
			},
		}
	});

	return source;
};
