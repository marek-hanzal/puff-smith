import {IAtomizerService} from "@/puff-smith/service/atomizer";
import {boolean} from "boolean";
import {tagByCodes} from "@/puff-smith/service/tag";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const AtomizerService = (prismaClient: IPrismaClientTransaction = prisma): IAtomizerService => {
	return {
		...AbstractRepositoryService<IAtomizerService>(prismaClient, prismaClient.atomizer, async atomizer => {
			return {
				...atomizer,
				vendor: await VendorService(prismaClient).toMap(atomizer.vendorId),
				cost: atomizer?.cost?.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return this.map(await this.create(request));
		},
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
