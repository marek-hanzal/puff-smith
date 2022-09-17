import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"VendorCount", IVendorSource>({
	source: VendorSource,
});
