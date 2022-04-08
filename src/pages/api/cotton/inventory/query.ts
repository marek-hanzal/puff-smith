import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {CottonInventoryService, ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"CottonsInventory", ICottonInventoryQuery, ICottonInventory>(CottonInventoryService().handleQuery);
