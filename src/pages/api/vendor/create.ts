import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IVendorSource>(VendorSource());
