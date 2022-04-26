import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVoucherService} from "@/puff-smith/service/voucher/interface";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const VoucherService = (prismaClient: IPrismaClientTransaction = prisma): IVoucherService => RepositoryService<IVoucherService>({
	name: "voucher",
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
});
