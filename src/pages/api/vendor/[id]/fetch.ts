import {asyncContainer} from "@/puff-smith/service/Container";
import {VendorSource}   from "@/puff-smith/service/vendor/VendorSource";
import {FetchEndpoint}  from "@leight-core/viv";

export default FetchEndpoint({
	name:      "Vendor",
	container: asyncContainer,
	source:    VendorSource,
});
