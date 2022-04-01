import {IVoucherService} from "@/puff-smith/service/voucher";
import prisma from "@/puff-smith/service/prisma";
import {RepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";

export const VoucherService = (prismaClient: IPrismaClientTransaction = prisma): IVoucherService => RepositoryService<IVoucherService>({
	name: 'voucher',
	source: prismaClient.voucher,
	mapper: async voucher => ({
		...voucher,
		cost: voucher.cost.toNumber(),
		maxFortune: voucher.maxFortune?.toNumber(),
	}),
	create: async create => prismaClient.voucher.create({
		data: create,
	}),
	onUnique: async create => prismaClient.voucher.update({
		where: {
			id: (await prismaClient.voucher.findFirst({
				where: {
					name: create.name,
				},
				rejectOnNotFound: true,
			})).id,
		},
		data: create,
	})
})
