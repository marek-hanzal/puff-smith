import {ofRequest} from "@/puff-smith/service";
import {CottonInventoryService} from "@/puff-smith/service/cotton/inventory/CottonInventoryService";
import {ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonInventory", ICottonInventoryQuery, ICottonInventory>(async params => CottonInventoryService(ofRequest(params)).handleQuery(params));
