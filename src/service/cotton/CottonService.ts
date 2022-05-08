import {ServiceCreate} from "@/puff-smith/service";
import {ICottonService, ICottonServiceCreate} from "@/puff-smith/service/cotton/interface";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {RepositoryService} from "@leight-core/server";

export const CottonService = (request: ICottonServiceCreate = ServiceCreate()): ICottonService => RepositoryService<ICottonService>({
	name: "cotton",
	source: request.prisma.cotton,
	mapper: async cotton => ({
		...cotton,
		vendor: await VendorService(request).toMap(cotton.vendorId),
		cost: cotton.cost.toNumber(),
		draws: await TagService(request).list(request.prisma.tag.findMany({
			where: {
				CottonDraw: {
					some: {
						cottonId: cotton.id,
					}
				}
			}
		})),
	}),
	create: async ({vendor, draws, ...cotton}) => request.prisma.cotton.create({
		data: {
			...cotton,
			vendor: {
				connect: {
					name: vendor,
				}
			},
			CottonDraw: {
				createMany: {
					data: draws ? (await TagService(request).fetchCodes(draws, "draw")).map(tag => ({
						drawId: tag.id,
					})) : [],
				}
			},
		},
	}),
	onUnique: async ({vendor, draws, ...create}) => {
		const _cotton = (await request.prisma.cotton.findFirst({
			where: {
				name: create.name,
				vendor: {
					name: vendor,
				}
			},
			rejectOnNotFound: true,
		}));
		await request.prisma.cottonDraw.deleteMany({
			where: {
				cottonId: _cotton.id,
			}
		});

		return request.prisma.cotton.update({
			where: {
				id: _cotton.id,
			},
			data: {
				...create,
				CottonDraw: {
					createMany: {
						data: draws ? (await TagService(request).fetchCodes(draws, "draw")).map(tag => ({
							drawId: tag.id,
						})) : [],
					}
				},
			},
		});
	},
});
