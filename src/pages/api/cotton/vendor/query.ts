import {CottonVendorSource} from "@/puff-smith/service/cotton/vendor/CottonVendorSource";
import {ICottonVendorSource} from "@/puff-smith/service/cotton/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", ICottonVendorSource>({
	source: CottonVendorSource,
});
