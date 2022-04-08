import {AtomizerInventoryService, IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"AtomizersInventory", IAtomizerInventoryQuery, IAtomizerInventory>(AtomizerInventoryService().handleQuery);
