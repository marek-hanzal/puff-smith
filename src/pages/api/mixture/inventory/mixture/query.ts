import {ofParams} from "@/puff-smith/service";
import {IMixtureInventory, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureInventoryRepository} from "@/puff-smith/service/mixture/inventory/MixtureInventoryRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixture", IMixtureInventoryQuery, IMixtureInventory>(async params => MixtureInventoryRepository(ofParams(params)).handleQuery(params));
