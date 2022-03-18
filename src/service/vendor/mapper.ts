import {IVendor, IVendors} from "@/puff-smith/service/vendor/interface";
import {Vendor} from "@prisma/client";
import prismaClient from "@/puff-smith/service/prisma";

export const vendorListMapper = async (vendors: IVendors) => (await vendors).map(vendorMapper);

export const vendorMapper = (vendor: Vendor): IVendor => {
	return {
		...vendor,
	};
}

export const vendorFetch = async (vendorId: string) => prismaClient.vendor.findFirst({
	where: {
		id: vendorId,
	}
})

export const vendorRequire = async (vendorId: string) => (await vendorFetch(vendorId))!!;
