import {asyncContainer} from "@/puff-smith/service/Container";
import {VendorSource}   from "@/puff-smith/service/vendor/VendorSource";
import {CountEndpoint}  from "@leight-core/viv";

export default CountEndpoint({
	name:      "VendorCount",
	container: asyncContainer,
	source:    VendorSource,
});
