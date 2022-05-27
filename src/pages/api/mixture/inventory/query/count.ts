import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureInventorySource} from "@/puff-smith/service/mixture/inventory/MixtureInventorySource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"MixtureInventoryCount", IMixtureInventorySource>(MixtureInventorySource());
