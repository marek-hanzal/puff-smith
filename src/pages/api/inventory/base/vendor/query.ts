import {BaseVendorSource} from "@/puff-smith/service/base/inventory/vendor/BaseVendorSource";
import {IBaseVendorSource} from "@/puff-smith/service/base/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IBaseVendorSource>({
	source: BaseVendorSource,
});
