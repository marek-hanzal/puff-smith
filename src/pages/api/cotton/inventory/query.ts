import {QueryEndpoint} from "@leight-core/server";
import {CottonInventoryService, ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton";

export default QueryEndpoint<"CottonsInventory", ICottonInventoryQuery, ICottonInventory>(CottonInventoryService().handleQuery);
