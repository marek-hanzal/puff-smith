import {IVoucherService} from "@/puff-smith/service/voucher";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";

export const VoucherService = (prismaClient: IPrismaClientTransaction = prisma): IVoucherService => {
	const service: IVoucherService = {
		...AbstractRepositoryService<IVoucherService>(prismaClient, prismaClient.voucher, async voucher => {
			return {
				...voucher,
				cost: voucher.cost.toNumber(),
				maxFortune: voucher.maxFortune?.toNumber(),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		importers: () => ({
			voucher: () => ({
				handler: service.create,
			}),
		}),
		create: async create => {
			try {
				return await prismaClient.voucher.create({
					data: create,
				})
			} catch (e) {
				return handleUniqueException(e, async () => {
					const _voucher = (await prismaClient.voucher.findFirst({
						where: {
							name: create.name,
						},
						rejectOnNotFound: true,
					}));
					return prismaClient.voucher.update({
						where: {
							id: _voucher.id,
						},
						data: create,
					})
				});
			}
		},
	};

	return service;
}
