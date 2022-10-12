import {asyncContainer} from "@/puff-smith/service/Container";
import {VendorSource}   from "@/puff-smith/service/vendor/VendorSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint({
	name:      "VendorCreate",
	container: asyncContainer,
	source:    VendorSource,
});
