import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IModInventory, IModInventoryQuery, ModInventoryService} from "@/puff-smith/service/mod";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"ModsInventory", IModInventoryQuery, IModInventory>(ModInventoryService().handleQuery);
