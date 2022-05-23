import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {Source} from "@leight-core/server";

export const VendorSource = (): IVendorSource => {
	const source: IVendorSource = Source<IVendorSource>({
		name: "vendor",
		prisma,
		get native() {
			return source.prisma.vendor;
		},
		map: async vendor => vendor,
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
				return await source.fetchByReference(fetch);
			} catch (e) {
				return undefined;
			}
		}
	});

	return source;
};
