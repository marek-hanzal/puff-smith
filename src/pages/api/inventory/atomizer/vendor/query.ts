import {AtomizerVendorSource} from "@/puff-smith/service/atomizer/inventory/vendor/AtomizerVendorSource";
import {IAtomizerVendorSource} from "@/puff-smith/service/atomizer/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IAtomizerVendorSource>(AtomizerVendorSource);
