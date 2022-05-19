import {ofParams} from "@/puff-smith/service";
import {BaseInventoryRepository} from "@/puff-smith/service/base/inventory/BaseInventoryRepository";
import {IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BaseInventory", IBaseInventoryQuery, IBaseInventory>(async params => BaseInventoryRepository(ofParams(params)).handleQuery(params));
