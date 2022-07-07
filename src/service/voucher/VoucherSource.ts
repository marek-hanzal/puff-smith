import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVoucherSource} from "@/puff-smith/service/voucher/interface";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge} from "@leight-core/utils";

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
					return onUnique(e, async () => source.prisma.voucher.update({
						where: {
							id: (await source.prisma.voucher.findUniqueOrThrow({
								where: {
									name: voucher.name,
								},
							})).id,
						},
						data: voucher,
					}));
				}
			},
			get: async id => source.prisma.voucher.findUniqueOrThrow({
				where: {id},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.voucher.count({
				where: merge(filter || {}, {
					OR: fulltext ? [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							}
						},
					] : undefined,
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.voucher.findMany({
				where: merge(filter || {}, {
					OR: fulltext ? [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							}
						},
					] : undefined,
				}),
				orderBy,
				...pageOf(query),
			}),
		},
	});

	return source;
};
