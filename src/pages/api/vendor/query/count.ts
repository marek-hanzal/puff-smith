import {ContainerPromise} from "@/puff-smith/service/Container";
import {VendorSource}     from "@/puff-smith/service/vendor/VendorSource";
import {CountEndpoint}    from "@leight-core/server";

export default CountEndpoint({
	name:      "VendorCount",
	container: ContainerPromise,
	source:    VendorSource,
});
