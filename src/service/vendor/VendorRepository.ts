import {IVendorCreate, IVendorRepository, IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {Repository, uniqueOf} from "@leight-core/server";

export const VendorRepository = (): IVendorRepository => {
	const source = VendorSource();

	return Repository<IVendorCreate, IVendorSource>({
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
		}
	}, {
		fetchByReference: ({vendorId, vendor}) => {
			if (!vendor && !vendorId) {
				throw new Error(`Provide [vendor] or [vendorId].`);
			}
			return source.prisma.vendor.findUnique({
				where: vendorId ? {
					id: vendorId,
				} : {
					name: vendor,
				},
				rejectOnNotFound: true,
			});
		},
		fetchByReferenceOptional: async fetch => {
			try {
				return await vendorSource().fetchByReference(fetch);
			} catch (e) {
				return undefined;
			}
		}
	});
};
