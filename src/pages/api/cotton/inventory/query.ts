import {CottonInventoryService} from "@/puff-smith/service/cotton/inventory/CottonInventoryService";
import {ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton/inventory/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonsInventory", ICottonInventoryQuery, ICottonInventory>(CottonInventoryService().handleQuery, cache);
