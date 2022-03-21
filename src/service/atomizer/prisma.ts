import prismaClient from "@/puff-smith/service/prisma";
import {IAtomizerCreate, IAtomizerQuery, IAtomizerTransactionCreate} from "@/puff-smith/service/atomizer/interface";
import {boolean} from "boolean";
import {tagByCodes} from "@/puff-smith/service/tag";
import {toQuery} from "@leight-core/server";
import {atomizerListMapper} from "@/puff-smith/service/atomizer/mapper";
import {transactionCreate, transactionSum} from "@/puff-smith/service/transaction";
import {IPrismaClientTransaction} from "@leight-core/api";

export async function atomizerCreate({draw, type, vendor, ...atomizer}: IAtomizerCreate) {
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
}

export const atomizerFetch = async (atomizerId: string, prisma: IPrismaClientTransaction = prismaClient) => prisma.atomizer.findFirst({
	where: {
		id: atomizerId,
	},
	include: {
		vendor: true,
	},
	rejectOnNotFound: true,
})

export const atomizerQuery = async (query: IAtomizerQuery) => toQuery<typeof atomizerListMapper, IAtomizerQuery>({
	query,
	source: prismaClient.atomizer,
	mapper: atomizerListMapper,
})

export const atomizerTransactionCreate = async (atomizerTransactionCreate: IAtomizerTransactionCreate) => {
	return prismaClient.$transaction(async prisma => {
		const atomizer = await atomizerFetch(atomizerTransactionCreate.atomizerId, prisma);
		const transaction = await transactionCreate({
			amount: -1 * (atomizer.cost?.toNumber() || 0),
			note: `Purchase of [${atomizer.vendor.name} ${atomizer.name}]`,
			userId: atomizerTransactionCreate.userId,
		}, prisma);
		(await transactionSum({
			filter: {
				userId: atomizerTransactionCreate.userId,
			}
		}, prisma)) < 0 && (() => {
			throw new Error("Not enough puffies")
		})();
		return await prisma.atomizerTransaction.create({
			data: {
				atomizerId: atomizer.id,
				transactionId: transaction.id,
				userId: atomizerTransactionCreate.userId,
			}
		});
	});
}
