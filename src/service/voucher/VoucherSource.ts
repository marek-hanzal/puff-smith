import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVoucherSource} from "@/puff-smith/service/voucher/interface";
import {onUnique, Source} from "@leight-core/server";

export const VoucherSource = (): IVoucherSource => {
	const source: IVoucherSource = Source<IVoucherSource>({
		name: "voucher",
		prisma,
		map: async voucher => voucher,
		source: {
			create: async voucher => {
				try {
					return await source.prisma.voucher.create({
						data: voucher,
					});
				} catch (e) {
					return onUnique(e, async voucher => source.prisma.voucher.update({
						where: {
							id: (await source.prisma.voucher.findFirst({
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
		},
	});

	return source;
};
