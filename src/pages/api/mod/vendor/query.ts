import {IModVendorSource} from "@/puff-smith/service/mod/vendor/interface";
import {ModVendorSource} from "@/puff-smith/service/mod/vendor/ModVendorSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IModVendorSource>(ModVendorSource());
