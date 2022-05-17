import {defaults} from "@/puff-smith/service";
import {IVendorService, IVendorServiceCreate} from "@/puff-smith/service/vendor/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const VendorService = (request: IVendorServiceCreate = defaults()): IVendorService => {
	const vendorService = singletonOf(() => VendorService(request));

	return {
		...RepositoryService<IVendorService>({
			name: "vendor",
			source: request.prisma.vendor,
			mapper: async vendor => vendor,
			create: async vendor => request.prisma.vendor.create({
				data: vendor,
			}),
			onUnique: vendor => request.prisma.vendor.findFirst({
				where: {
					name: vendor.name,
				},
				rejectOnNotFound: true,
			}),
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
				return await vendorService().fetchByReference(fetch);
			} catch (e) {
				return undefined;
			}
		}
	};
};
