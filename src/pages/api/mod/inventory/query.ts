import {IModInventory, IModInventoryQuery, ModInventoryService} from "@/puff-smith/service/mod";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModsInventory", IModInventoryQuery, IModInventory>(ModInventoryService().handleQuery);
