import {QueryEndpoint} from "@leight-core/server";
import {IModInventory, IModInventoryQuery, ModInventoryService} from "@/puff-smith/service/mod";

export default QueryEndpoint<"ModsInventory", IModInventoryQuery, IModInventory>(ModInventoryService().handleQuery);
