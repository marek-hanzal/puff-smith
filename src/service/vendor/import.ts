import {vendorCreate} from "@/puff-smith/service/vendor/prisma";
import {IImportHandlers} from "@leight-core/api";

export const VendorImport: IImportHandlers = {
	vendor() {
		return {
			handler: vendorCreate,
		};
	}
}
