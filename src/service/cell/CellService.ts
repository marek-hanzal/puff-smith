import {ICellService} from "@/puff-smith/service/cell";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {VendorService} from "@/puff-smith/service/vendor";
import {TagService} from "@/puff-smith/service/tag";

export const CellService = (prismaClient: IPrismaClientTransaction = prisma): ICellService => {
	const service: ICellService = {
		...AbstractRepositoryService<ICellService>(prismaClient, prismaClient.cell, async cell => {
			return {
				...cell,
				vendor: await VendorService(prismaClient).toMap(cell.vendorId),
				type: await TagService(prismaClient).toMap(cell.typeId),
				cost: cell.cost.toNumber(),
				drain: cell.drain?.toNumber(),
				ohm: cell.ohm?.toNumber(),
				voltage: cell.voltage?.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			cell: () => ({
				handler: service.create,
			}),
		}),
		create: async ({type, vendor, ...cell}) => {
			try {
				return await prismaClient.cell.create({
					data: {
						...cell,
						vendor: {
							connect: {
								name: vendor,
							}
						},
						type: {
							connect: {
								code_group: {
									code: `${type}`,
									group: 'cell-type',
								}
							}
						},
					},
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _cell = (await prismaClient.cell.findFirst({
						where: {
							name: cell.name,
							vendor: {
								name: vendor,
							}
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.cell.update({
						where: {
							id: _cell.id,
						},
						data: {
							...cell,
							type: {
								connect: {
									code_group: {
										code: `${type}`,
										group: 'cell-type',
									}
								}
							},
						},
					})
				});
			}
		},
	};

	return service;
}
