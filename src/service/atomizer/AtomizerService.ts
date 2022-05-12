import {ServiceCreate} from "@/puff-smith/service";
import {IAtomizerService, IAtomizerServiceCreate} from "@/puff-smith/service/atomizer/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";
import {boolean} from "boolean";

export const AtomizerService = (request: IAtomizerServiceCreate = ServiceCreate()) => RepositoryService<IAtomizerService>({
	name: "atomizer",
	source: request.prisma.atomizer,
	mapper: async atomizer => ({
		...atomizer,
		vendor: await VendorService(request).toMap(atomizer.vendorId),
		draws: await TagService(request).list(request.prisma.tag.findMany({
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
	create: async ({draws, type, vendor, ...atomizer}) => request.prisma.atomizer.create({
		data: {
			...atomizer,
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
					data: draws ? (await TagService(request).fetchCodes(draws, "draw")).map(tag => ({
						drawId: tag.id,
					})) : [],
				}
			},
		},
	}),
	onUnique: async ({vendor, type, draws, ...create}) => {
		const _atomizer = (await request.prisma.atomizer.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		await request.prisma.atomizerDraw.deleteMany({
			where: {
				atomizerId: _atomizer.id,
			}
		});
		return request.prisma.atomizer.update({
			where: {
				id: _atomizer.id,
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
						data: draws ? (await TagService(request).fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			},
		});
	}
});
