import {IBaseService} from "@/puff-smith/service/base";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";

export const BaseService = (prismaClient: IPrismaClientTransaction = prisma): IBaseService => {
	const service: IBaseService = {
		...AbstractRepositoryService<IBaseService>(prismaClient, prismaClient.base, async base => {
			return {
				...base,
				vendor: await VendorService(prismaClient).toMap(base.vendorId),
				cost: base.cost.toNumber(),
				pg: base.pg.toNumber(),
				vg: base.vg.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			base: () => ({
				handler: service.create,
			}),
		}),
		create: async ({vendor, ...base}) => {
			try {
				return await prismaClient.base.create({
					data: {
						...base,
						vendor: {
							connect: {
								name: vendor,
							}
						},
					},
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _base = (await prismaClient.base.findFirst({
						where: {
							name: base.name,
							vendor: {
								name: vendor,
							}
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.base.update({
						where: {
							id: _base.id,
						},
						data: base,
					})
				});
			}
		},
	};

	return service;
}
