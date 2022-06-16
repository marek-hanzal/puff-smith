import {CottonInventorySource} from "@/puff-smith/service/cotton/inventory/CottonInventorySource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CottonInventoryCount", ICottonInventorySource>(CottonInventorySource);
