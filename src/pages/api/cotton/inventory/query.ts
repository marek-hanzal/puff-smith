import {defaults} from "@/puff-smith/service";
import {CottonInventoryService} from "@/puff-smith/service/cotton/inventory/CottonInventoryService";
import {ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonInventory", ICottonInventoryQuery, ICottonInventory>(async ({request, toUserId}) => CottonInventoryService(defaults(toUserId())).handleQuery({request}));
