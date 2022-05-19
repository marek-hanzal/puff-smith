import {IVendorRepository, IVendorRepositoryCreate} from "@/puff-smith/service/vendor/interface";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const VendorRepository = (request: IVendorRepositoryCreate): IVendorRepository => {
	const vendorRepository = singletonOf(() => VendorRepository(request));

	return {
		...Repository<IVendorRepository>({
			name: "vendor",
			source: request.prisma.vendor,
			mapper: async vendor => vendor,
			create: async vendor => {
				const create = vendor;
				try {
					return await request.prisma.vendor.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.vendor.findFirst({
						where: {
							name: create.name,
						},
						rejectOnNotFound: true,
					}));
				}
			},
		}),
		fetchByReference: ({vendorId, vendor}) => {
			if (!vendor && !vendorId) {
				throw new Error(`Provide [vendor] or [vendorId].`);
			}
			return request.prisma.vendor.findUnique({
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
				return await vendorRepository().fetchByReference(fetch);
			} catch (e) {
				return undefined;
			}
		}
	};
};
