import prismaClient from "@/puff-smith/service/prisma";
import {IAtomizerCreate} from "@/puff-smith/service/atomizer/interface";
import {boolean} from "boolean";
import {tagByCodes} from "@/puff-smith/service/tag";

export async function atomizerCreate({draw, type, vendor, ...atomizer}: IAtomizerCreate) {
	try {
		return await prismaClient.atomizer.create({
			data: {
				...atomizer,
				dualCoil: boolean(atomizer?.dualCoil),
				squonk: boolean(atomizer?.squonk),
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
}
