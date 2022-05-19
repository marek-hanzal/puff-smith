import {ofRequest} from "@/puff-smith/service";
import {BoosterInventoryRepository} from "@/puff-smith/service/booster/inventory/BoosterInventoryRepository";
import {IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoosterInventory", IBoosterInventoryQuery, IBoosterInventory>(async params => BoosterInventoryRepository(ofRequest(params)).handleQuery(params));
