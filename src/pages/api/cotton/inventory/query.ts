import {CottonInventoryService, ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonsInventory", ICottonInventoryQuery, ICottonInventory>(CottonInventoryService().handleQuery);
