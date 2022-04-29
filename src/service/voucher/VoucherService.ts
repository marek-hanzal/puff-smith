import {ServiceCreate} from "@/puff-smith/service";
import {IVoucherService, IVoucherServiceCreate} from "@/puff-smith/service/voucher/interface";
import {RepositoryService} from "@leight-core/server";

export const VoucherService = (request: IVoucherServiceCreate = ServiceCreate()): IVoucherService => RepositoryService<IVoucherService>({
	name: "voucher",
	source: request.prisma.voucher,
	mapper: async voucher => ({
		...voucher,
		cost: voucher.cost.toNumber(),
		maxFortune: voucher.maxFortune?.toNumber(),
	}),
	create: async create => request.prisma.voucher.create({
		data: create,
	}),
	onUnique: async create => request.prisma.voucher.update({
		where: {
			id: (await request.prisma.voucher.findFirst({
				where: {
					name: create.name,
				},
				rejectOnNotFound: true,
			})).id,
		},
		data: create,
	})
});
