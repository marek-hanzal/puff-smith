import {defaults} from "@/puff-smith/service";
import {IVoucherService, IVoucherServiceCreate} from "@/puff-smith/service/voucher/interface";
import {RepositoryService} from "@leight-core/server";

export const VoucherService = (request: IVoucherServiceCreate = defaults()): IVoucherService => {
	return RepositoryService<IVoucherService>({
		name: "voucher",
		source: request.prisma.voucher,
		mapper: async voucher => voucher,
		create: async voucher => request.prisma.voucher.create({
			data: voucher,
		}),
		onUnique: async voucher => request.prisma.voucher.update({
			where: {
				id: (await request.prisma.voucher.findFirst({
					where: {
						name: voucher.name,
					},
					rejectOnNotFound: true,
				})).id,
			},
			data: voucher,
		})
	});
};
