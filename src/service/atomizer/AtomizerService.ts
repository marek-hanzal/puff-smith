import {IAtomizerService} from "@/puff-smith/service/atomizer/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";
import {boolean} from "boolean";

export const AtomizerService = (prismaClient: IPrismaClientTransaction = prisma) => RepositoryService<IAtomizerService>({
	name: "atomizer",
	source: prismaClient.atomizer,
	mapper: async atomizer => ({
		...atomizer,
		vendor: await VendorService(prismaClient).toMap(atomizer.vendorId),
		cost: atomizer?.cost?.toNumber(),
		draws: await TagService(prismaClient).list(prismaClient.tag.findMany({
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
	create: async ({draws, type, vendor, ...atomizer}) => prismaClient.atomizer.create({
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
						code: `${type}`,
						group: "atomizer-type",
					}
				}
			},
			AtomizerDraw: {
				createMany: {
					data: draws ? (await TagService(prismaClient).fetchCodes(draws, "draw")).map(tag => ({
						drawId: tag.id,
					})) : [],
				}
			},
		},
	}),
	onUnique: async ({vendor, type, draws, ...create}) => {
		const _atomizer = (await prismaClient.atomizer.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		await prismaClient.atomizerDraw.deleteMany({
			where: {
				atomizerId: _atomizer.id,
			}
		});
		return prismaClient.atomizer.update({
			where: {
				id: _atomizer.id,
			},
			data: {
				...create,
				dualCoil: boolean(create?.dualCoil),
				squonk: boolean(create?.squonk),
				cost: create.cost && parseFloat(create.cost),
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
						data: draws ? (await TagService(prismaClient).fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			},
		});
	}
});
