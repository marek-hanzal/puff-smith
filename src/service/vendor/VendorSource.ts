import {IVendor, IVendorEntity, IVendorQuery, IVendorSource} from "@/puff-smith/service/vendor/interface";
import {Source} from "@leight-core/server";

export const VendorSource = (): IVendorSource => {
	const source: IVendorSource = Source<IVendorEntity, IVendor, IVendorQuery>({
		name: "vendor",
		get source() {
			return source.prisma.vendor;
		},
		map: async vendor => vendor,
	});

	return source;
};
