import prismaClient from "@/puff-smith/service/prisma";
import {IVendorCreate} from "@/puff-smith/service/vendor/interface";

export async function vendorCreate(vendor: IVendorCreate) {
	try {
		return await prismaClient.vendor.create({
			data: vendor,
		})
	} catch (e: any) {
		if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
			return (await prismaClient.vendor.findFirst({
				where: {
					name: vendor.name,
				}
			}))!!;
		}
		throw e;
	}
}
