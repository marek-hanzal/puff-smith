import {ofParams} from "@/puff-smith/service";
import {CottonInventoryRepository} from "@/puff-smith/service/cotton/inventory/CottonInventoryRepository";
import {ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonInventory", ICottonInventoryQuery, ICottonInventory>(async params => CottonInventoryRepository(ofParams(params)).handleQuery(params));
