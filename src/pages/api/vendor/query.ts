import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IVendorSource>(VendorSource);
