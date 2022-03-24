import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IModService} from "@/puff-smith/service/mod/interface";
import {VendorService} from "@/puff-smith/service/vendor";

export const ModService = (prismaClient: IPrismaClientTransaction = prisma): IModService => {
	const service: IModService = {
		...AbstractRepositoryService<IModService>(prismaClient, prismaClient.mod, async mod => {
			return {
				...mod,
				cost: mod.cost.toNumber(),
				power: mod.power.toNumber(),
				voltage: mod.voltage.toNumber(),
				vendor: await VendorService(prismaClient).toMap(mod.vendorId),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers() {
			const handler = service.create;
			return ({
				mod: () => ({
					handler,
				}),
			})
		},
		create: async ({vendor, ...create}) => {
			try {
				return prismaClient.mod.create({
					data: {
						...create,
						vendor: {
							connect: {
								name: vendor,
							}
						}
					},
				});
			} catch (e) {
				if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
					const _mod = (await prismaClient.mod.findFirst({
						where: {
							name: create.name,
							vendor: {
								name: vendor,
							}
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.mod.update({
						where: {
							id: _mod.id,
						},
						data: create,
					});
				}
				throw e;
			}
		},
	};

	return service;
}
