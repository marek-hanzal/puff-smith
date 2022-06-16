import {IMixtureVendorSource} from "@/puff-smith/service/mixture/vendor/interface";
import {MixtureVendorSource} from "@/puff-smith/service/mixture/vendor/MixtureVendorSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IMixtureVendorSource>(MixtureVendorSource);
