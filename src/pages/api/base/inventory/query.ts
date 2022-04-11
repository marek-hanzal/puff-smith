import {BaseInventoryService, IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BasesInventory", IBaseInventoryQuery, IBaseInventory>(BaseInventoryService().handleQuery);
