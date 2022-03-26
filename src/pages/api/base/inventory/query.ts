import {QueryEndpoint} from "@leight-core/server";
import {BaseInventoryService, IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base";

export default QueryEndpoint<"BasesInventory", IBaseInventoryQuery, IBaseInventory>(BaseInventoryService().handleQuery);
