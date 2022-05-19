import {ofParams} from "@/puff-smith/service";
import {IModInventory, IModInventoryQuery} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryRepository} from "@/puff-smith/service/mod/inventory/ModInventoryRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModInventory", IModInventoryQuery, IModInventory>(async params => ModInventoryRepository(ofParams(params)).handleQuery(params));
