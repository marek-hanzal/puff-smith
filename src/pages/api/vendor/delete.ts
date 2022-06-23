import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IVendorSource>({
	source: VendorSource,
});
