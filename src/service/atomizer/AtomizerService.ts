import {IAtomizer, IAtomizerQuery, IAtomizerServiceFactory} from "@/puff-smith/service/atomizer/interface";
import {Atomizer} from "@prisma/client";
import {boolean} from "boolean";
import {tagByCodes} from "@/puff-smith/service/tag";
import {vendorMapper, vendorRequire} from "@/puff-smith/service/vendor";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";

export const AtomizerService: IAtomizerServiceFactory = (prismaClient = prisma) => {
	return {
		...AbstractRepositoryService<Atomizer, IAtomizer, IAtomizerQuery>(prismaClient, prismaClient.atomizer, async atomizer => {
			const vendor = await vendorRequire(atomizer.vendorId);
			return {
				...atomizer,
				vendor: vendorMapper(vendor),
				cost: atomizer?.cost?.toNumber(),
			};
		}),
		importers() {
			const handler = this.create;
			return ({
				atomizer: () => ({
					handler,
				}),
			})
		},
		create: async ({draw, type, vendor, ...atomizer}) => {
			try {
				return await prismaClient.atomizer.create({
					data: {
						...atomizer,
						dualCoil: boolean(atomizer?.dualCoil),
						squonk: boolean(atomizer?.squonk),
						cost: atomizer.cost && parseFloat(atomizer.cost),
						vendor: {
							connect: {
								name: vendor,
							}
						},
						type: {
							connect: {
								code_group: {
									code: type,
									group: 'atomizer-type',
								}
							}
						},
						AtomizerDraw: {
							createMany: {
								data: draw ? (await tagByCodes(draw, 'draw')).map(tag => ({
									drawId: tag.id,
								})) : [],
							}
						}
					},
				})
			} catch (e: any) {
				if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
					const _atomizer = (await prismaClient.atomizer.findFirst({
						where: {
							name: atomizer.name,
							vendor: {
								name: vendor,
							}
						}
					}))!!;
					await prismaClient.atomizerDraw.deleteMany({
						where: {
							atomizerId: _atomizer.id,
						}
					});
					return await prismaClient.atomizer.update({
						where: {
							id: _atomizer.id,
						},
						data: {
							...atomizer,
							dualCoil: boolean(atomizer?.dualCoil),
							squonk: boolean(atomizer?.squonk),
							cost: atomizer.cost && parseFloat(atomizer.cost),
							type: {
								connect: {
									code_group: {
										code: type,
										group: 'atomizer-type',
									}
								}
							},
							AtomizerDraw: {
								createMany: {
									data: draw ? (await tagByCodes(draw, 'draw')).map(tag => ({
										drawId: tag.id,
									})) : [],
								}
							}
						},
					})
				}
				throw e;
			}
		},
	}
}
