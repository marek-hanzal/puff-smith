import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureInventorySource} from "@/puff-smith/service/mixture/inventory/MixtureInventorySource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixture", IMixtureInventorySource>(MixtureInventorySource());
