import {ServiceCreate} from "@/puff-smith/service";
import {IMixtureInventory, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
import {MixtureInventoryService} from "@/puff-smith/service/mixture/inventory/MixtureInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mixture", IMixtureInventoryQuery, IMixtureInventory>(async ({request, toUserId}) => MixtureInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
