import {AromaVendorSource} from "@/puff-smith/service/aroma/vendor/AromaVendorSource";
import {IAromaVendorSource} from "@/puff-smith/service/aroma/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IAromaVendorSource>(AromaVendorSource());
