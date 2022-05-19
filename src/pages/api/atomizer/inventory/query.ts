import {ofParams} from "@/puff-smith/service";
import {AtomizerInventoryRepository} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryRepository";
import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerInventory", IAtomizerInventoryQuery, IAtomizerInventory>(async params => AtomizerInventoryRepository(ofParams(params)).handleQuery(params));
