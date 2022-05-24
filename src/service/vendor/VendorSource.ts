import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {onUnique, Source} from "@leight-core/server";

export const VendorSource = (): IVendorSource => {
	const source: IVendorSource = Source<IVendorSource>({
		name: "vendor",
		prisma,
		map: async vendor => vendor,
		source: {
			create: async vendor => {
				const create = vendor;
				try {
					return await source.prisma.vendor.create({
						data: create,
					});
				} catch (e) {
					return onUnique(e, async () => source.prisma.vendor.findFirst({
						where: {
							name: create.name,
						},
						rejectOnNotFound: true,
					}));
				}
			}
		},
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
