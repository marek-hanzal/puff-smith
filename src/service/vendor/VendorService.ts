import {ServiceCreate} from "@/puff-smith/service";
import {IVendorService, IVendorServiceCreate} from "@/puff-smith/service/vendor/interface";
import {RepositoryService} from "@leight-core/server";

export const VendorService = (request: IVendorServiceCreate = ServiceCreate()): IVendorService => ({
	...RepositoryService<IVendorService>({
		name: "vendor",
		source: request.prisma.vendor,
		mapper: async vendor => vendor,
		create: async create => request.prisma.vendor.create({
			data: create,
		}),
		onUnique: create => request.prisma.vendor.findFirst({
			where: {
				name: create.name,
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
	}
});
