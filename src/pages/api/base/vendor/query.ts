import {BaseVendorSource} from "@/puff-smith/service/base/vendor/BaseVendorSource";
import {IBaseVendorSource} from "@/puff-smith/service/base/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IBaseVendorSource>(BaseVendorSource());
