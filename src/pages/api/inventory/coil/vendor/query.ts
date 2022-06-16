import {CoilVendorSource} from "@/puff-smith/service/coil/inventory/vendor/CoilVendorSource";
import {ICoilVendorSource} from "@/puff-smith/service/coil/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", ICoilVendorSource>(CoilVendorSource);
