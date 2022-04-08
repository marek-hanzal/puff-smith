import {BaseInventoryService, IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"BasesInventory", IBaseInventoryQuery, IBaseInventory>(BaseInventoryService().handleQuery);
