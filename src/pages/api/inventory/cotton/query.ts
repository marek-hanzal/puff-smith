import {CottonInventorySource} from "@/puff-smith/service/cotton/inventory/CottonInventorySource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonInventory", ICottonInventorySource>(CottonInventorySource);
