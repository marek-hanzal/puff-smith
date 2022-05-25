import {IWireVendorSource} from "@/puff-smith/service/wire/vendor/interface";
import {WireVendorSource} from "@/puff-smith/service/wire/vendor/WireVendorSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IWireVendorSource>(WireVendorSource());
