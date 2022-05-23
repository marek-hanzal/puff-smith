import {IVendorRepository} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Repository, uniqueOf} from "@leight-core/server";

export const VendorRepository = (): IVendorRepository => {
	const source = VendorSource();

	return Repository({
		source,
		create: async vendor => {
			const create = vendor;
			try {
				return await source.prisma.vendor.create({
					data: create,
				});
			} catch (e) {
				return uniqueOf(e, async () => source.prisma.vendor.findFirst({
					where: {
						name: create.name,
					},
					rejectOnNotFound: true,
				}));
			}
		},
	});
};
