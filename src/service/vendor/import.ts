import {IImportHandlers} from "@/puff-smith/import";
import {vendorCreate} from "@/puff-smith/service/vendor/prisma";

export const VendorImport: IImportHandlers = {
	vendor() {
		return {
			handler: vendorCreate,
		};
	}
}
