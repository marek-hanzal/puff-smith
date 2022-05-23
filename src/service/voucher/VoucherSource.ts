import {IVoucherSource, IVoucherSourceCreate} from "@/puff-smith/service/voucher/interface";
import {onUnique, Source} from "@leight-core/server";

export const VoucherSource = (request: IVoucherSourceCreate): IVoucherSource => {
	return Source<IVoucherSource>({
		name: "voucher",
		source: request.prisma.voucher,
		mapper: async voucher => voucher,
		create: async voucher => {
			try {
				return await request.prisma.voucher.create({
					data: voucher,
				});
			} catch (e) {
				return onUnique(e, async voucher => request.prisma.voucher.update({
					where: {
						id: (await request.prisma.voucher.findFirst({
							where: {
								name: voucher.name,
							},
							rejectOnNotFound: true,
						})).id,
					},
					data: voucher,
				}));
			}
		},
	});
};
