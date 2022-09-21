import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Vendor", IVendorSource>({
	source: VendorSource,
});
